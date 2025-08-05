/*
 * Copyright ou © ou Copr. Université de Lorraine, (2022)
 *
 * Direction du Numérique de l'Université de Lorraine - SIED
 *  (dn-mobile-dev@univ-lorraine.fr)
 * JNESIS (contact@jnesis.com)
 *
 * Ce logiciel est un programme informatique servant à rendre accessible
 * sur mobile divers services universitaires aux étudiants et aux personnels
 * de l'université.
 *
 * Ce logiciel est régi par la licence CeCILL 2.1, soumise au droit français
 * et respectant les principes de diffusion des logiciels libres. Vous pouvez
 * utiliser, modifier et/ou redistribuer ce programme sous les conditions
 * de la licence CeCILL telle que diffusée par le CEA, le CNRS et INRIA
 * sur le site "http://cecill.info".
 *
 * En contrepartie de l'accessibilité au code source et des droits de copie,
 * de modification et de redistribution accordés par cette licence, il n'est
 * offert aux utilisateurs qu'une garantie limitée. Pour les mêmes raisons,
 * seule une responsabilité restreinte pèse sur l'auteur du programme, le
 * titulaire des droits patrimoniaux et les concédants successifs.
 *
 * À cet égard, l'attention de l'utilisateur est attirée sur les risques
 * associés au chargement, à l'utilisation, à la modification et/ou au
 * développement et à la reproduction du logiciel par l'utilisateur étant
 * donné sa spécificité de logiciel libre, qui peut le rendre complexe à
 * manipuler et qui le réserve donc à des développeurs et des professionnels
 * avertis possédant des connaissances informatiques approfondies. Les
 * utilisateurs sont donc invités à charger et à tester l'adéquation du
 * logiciel à leurs besoins dans des conditions permettant d'assurer la
 * sécurité de leurs systèmes et/ou de leurs données et, plus généralement,
 * à l'utiliser et à l'exploiter dans les mêmes conditions de sécurité.
 *
 * Le fait que vous puissiez accéder à cet en-tête signifie que vous avez
 * pris connaissance de la licence CeCILL 2.1, et que vous en avez accepté les
 * termes.
 */

import { createStore } from '@ngneat/elf';
import {
  persistState
} from '@ngneat/elf-persist-state';
import { localForageStore } from '@multi/shared';
import { selectEntityByPredicate, selectManyByPredicate, setEntities, withEntities, selectAllEntities } from "@ngneat/elf-entities";
import { map, Observable } from 'rxjs';

export enum ChildDisplay {
  card = 'card',
  list = 'list',
}

export enum PageType {
  content = 'content',
  externalLink = 'external_link',
  internalLink = 'internal_link',
}

export interface KnowledgeBaseItem{
  id:number,
  pageType:PageType
  parentId?:number
  content?:string
  title?:string
  link?:string
  email?:string
  phone?:string
  address?:string
  childDisplay?:ChildDisplay
  isLeaf?:boolean
}
const STORE_NAME = 'knowledgeBase';

const store = createStore(
  { name: STORE_NAME },
  withEntities<KnowledgeBaseItem>(),
);

export const persist = persistState(store, {
  key: STORE_NAME,
  storage: localForageStore,
});

export const setKnowledgeBases = (knowledgeBaseItems: KnowledgeBaseItem[]) => {
  store.update(setEntities(knowledgeBaseItems));
};

export const knowledgeBases$ = store.pipe(selectManyByPredicate((item) => !item.parentId));

export const getKnowledgeBaseByParentId = (parentId: number): Observable<KnowledgeBaseItem[]> =>
  store.pipe(
    selectAllEntities(),
    map(allItems => {
      const children = allItems.filter(item => item.parentId === parentId);
      const parentIds = new Set(allItems.map(item => item.parentId).filter(id => id !== null));
      return children.map(child => ({
        ...child,
        isLeaf: !parentIds.has(child.id)
      }));
    })
  );

export const getKnowledgeBaseItemById = (id: number): Observable<KnowledgeBaseItem> =>
  store.pipe(
    selectEntityByPredicate((item) => item.id === id)
  );

export const searchKnowledgeBase = (text: string): Observable<KnowledgeBaseItem[]> =>
  store.pipe(
    selectManyByPredicate(item =>
      item.title.toLowerCase().includes(text) ||
      item.content?.toLowerCase().includes(text)
    ));


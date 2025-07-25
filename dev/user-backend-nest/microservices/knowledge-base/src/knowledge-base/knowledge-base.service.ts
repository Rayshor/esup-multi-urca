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

import {Injectable, Logger} from '@nestjs/common';
import {KnowledgeBaseProviderApi} from '../config/configuration.interface';
import {ConfigService} from '@nestjs/config';
import {HttpService} from '@nestjs/axios';
import {Observable, of} from 'rxjs';
import {ChildDisplay, KnowledgeBaseItem, KnowledgeBaseQueryDto, PageType,} from './knowledge-base.dto';

@Injectable()
export class KnowledgeBaseService {
  private readonly logger = new Logger(KnowledgeBaseService.name);
  private knowledgeBaseProviderApiConfig: KnowledgeBaseProviderApi;

  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {
    this.knowledgeBaseProviderApiConfig =
      this.configService.get<KnowledgeBaseProviderApi>(
        'knowledgeBaseProviderApi',
      );
  }

  private itemsMock:KnowledgeBaseItem[]=[
          {
              title:'Première page vers enfant',
              id:1,
              pageType:PageType.CONTENT,
          },
      {
          title:'Première page vers lien interne map',
          id:2,
          link:'map',
          pageType:PageType.INTERNAL_LINK,
      },
      {
          title:'Première page vers lien externe jnesis.com',
          id:3,
          link:'https://www.jnesis.com',
          pageType:PageType.EXTERNAL_LINK,
      },
      {
          title:'Première enfant',
          content:'id Nunc ...',
          id:4,
          pageType:PageType.EXTERNAL_LINK,
          childDisplay:ChildDisplay.CARD,
          parentId:1,
          //todo move flat and do recursion
          childrens:[{
              title:'Page affiché au format carte',
              content:'id Nunc ...d',
              id:5,
              pageType:PageType.CONTENT,
              childDisplay:ChildDisplay.CARD,
              parentId:4
          },
              {
                  title:'Autre Page affiché au format carte',
                  content:'id Nunc dzdzdzdz zdd z dzdzf fef ',
                  id:6,
                  pageType:PageType.CONTENT,
                  childDisplay:ChildDisplay.CARD,
                  parentId:4
              }]
      },



  ];

  public getKnowledgeBase(
    query: KnowledgeBaseQueryDto,
  ): Observable<KnowledgeBaseItem[]> {

      //Find first level of items without parentId
      const firstPageChilds=this.itemsMock.filter(item=> !item.parentId)

      //add childrens to first parent level ( TODO : RECURSION)
      firstPageChilds.forEach(parent=>
          parent.childrens=this.itemsMock.filter(child=>parent.id===child.parentId))


      return of(firstPageChilds);
  }
}

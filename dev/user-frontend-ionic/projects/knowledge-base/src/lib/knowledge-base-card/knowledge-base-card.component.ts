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

import { Component, Input } from '@angular/core';
import { ChildDisplay, KnowledgeBaseItem, PageType } from '../knowledge-base.repository';
import { Browser } from '@capacitor/browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-knowledge-base-card',
  templateUrl: './knowledge-base-card.component.html',
  styleUrls: ['../../../../../src/theme/app-theme/styles/knowledge-base/knowledge-base-card.component.scss']
})

export class KnowledgeBaseCardComponent {
  @Input() item: KnowledgeBaseItem;
  @Input() displayMode: ChildDisplay;
  public isExpanded: boolean = false;

  constructor(
    private router: Router,
  ) {}

  openItemLink(item: KnowledgeBaseItem) {
    if (item.pageType === PageType.internalLink) {
      this.router.navigateByUrl(item.link)
    }
    if (item.pageType === PageType.externalLink) {
      Browser.open({url: item.link});
    }
    if (item.pageType === PageType.content) {
      this.router.navigateByUrl(`knowledge-base/${item.id}`)
    }
  }

  getButtonIcon(type: PageType) {
    switch (type) {
      case PageType.externalLink: return 'open-outline';
      case PageType.internalLink: return 'arrow-forward';
      case PageType.content: return 'arrow-forward';
    }
  }

  toggleDetails() {
    this.isExpanded = !this.isExpanded;
  }

  handlePhone(phone: string) {
    window.open(`tel:${phone}`);
  }

  handleEmail(email: string) {
    window.open(`mailto:${email}`);
  }

  handleLink(link: string) {
    Browser.open({url: link});
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  protected readonly ChildDisplay = ChildDisplay;
}

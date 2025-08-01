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

module.exports.knowledgeBaseData = [
    {
        "title": "Présentation de l’université",
        "id": 1,
        "pageType": "content",
        "content": "Fondée en 1896, l’Université Lumière accueille chaque année plus de 30 000 étudiants. Elle propose un large éventail de formations en sciences, lettres, droit, économie et gestion.",
        "childDisplay": "list"
    },
    {
        "title": "Vie étudiante et services",
        "id": 7,
        "pageType": "content",
        "content": "Découvrez les services dédiés aux étudiants : accompagnement social, bibliothèques, vie associative, événements culturels et accès aux installations sportives du campus.",
        "childDisplay": "card"
    },
    {
        "title": "Plan du campus",
        "id": 2,
        "link": "map",
        "pageType": "internal_link"
    },
    {
        "title": "Portail numérique des étudiants",
        "id": 3,
        "link": "https://www.esup-portail.org/wiki/spaces/ESUPMULTI/pages/1340637201/Accueil",
        "pageType": "external_link"
    },
    {
        "title": "Facultés et départements",
        "content": "L’Université est composée de plusieurs facultés : Lettres et Langues, Sciences, Droit, Médecine, ainsi que de nombreux laboratoires de recherche.",
        "id": 4,
        "pageType": "content",
        "parentId": 1,
        childDisplay: "card"
    },
    {
        "title": "Département de Lettres Modernes",
        "content": "Le département propose des formations en littérature française, comparée et francophonie. Il organise régulièrement des conférences ouvertes à tous.",
        "id": 5,
        "pageType": "content",
        "parentId": 4,
        "link": "https://www.esup-portail.org",
        "phone": "0606060606",
        "address": "45 rue du Soleil 99999 VILLE",
        "email": "contact@esup.com"
    },
    {
        "title": "Département de Physique",
        "content": "Les étudiants peuvent suivre une licence, un master ou un doctorat en physique fondamentale ou appliquée, avec de nombreux partenariats industriels.",
        "id": 6,
        "pageType": "content",
        "parentId": 4,
        "link": "https://www.esup-portail.org",
        "phone": "0606060606",
        "address": "45 rue du Soleil 99999 VILLE",
        "email": "contact@esup.com"
    },
    {
        "title": "Santé, bien-être et accompagnement",
        "content": "L’université dispose d’un service de santé étudiant, d’un soutien psychologique et d’un pôle handicap. Des permanences sont assurées chaque semaine.",
        "id": 8,
        "pageType": "content",
        "parentId": 7,
        "link": "https://www.esup-portail.org",
        "phone": "0606060606",
        "address": "45 rue du Soleil 99999 VILLE",
        "email": "contact@esup.com"
    },
    {
        "title": "Activités sportives et culturelles",
        "content": "Une trentaine d’activités sportives sont proposées via le SUAPS. Des ateliers artistiques, clubs photo et musique sont ouverts toute l’année.",
        "id": 9,
        "pageType": "content",
        "parentId": 7
    },
    {
        "title": "Clubs et associations étudiantes",
        "content": "Plus de 80 associations sont présentes sur le campus : BDE, clubs humanitaires, écologiques, tech ou encore débats citoyens.",
        "id": 10,
        "pageType": "content",
        "parentId": 9
    }
];

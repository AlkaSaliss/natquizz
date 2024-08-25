interface QuizQuestion {
    question: string
    answer: string
}

interface QuizData {
    [key: string]: QuizQuestion[]
}

const quiz120Data: QuizData = {
    "Motivation": [
        {
            "question": "1. Pourquoi voulez-vous devenir français?",
            "answer": "C'est la première question qu'on vous pose systématiquement, donc préparez bien la réponse. Vous pouvez citer : les valeurs de la France auxquelles vous adhérez un projet personnel ou professionnel que vous voudriez construire en France votre mode de vie actuel que vous appréciez beaucoup la place de la France sur le paysage mondial : 3ème économie mondiale, leader aéronautique, agroalimentaire, industrie du luxe … Richesse de la culture en France : science, Arts, littérature… les valeurs de la France auxquelles vous adhérez un projet personnel ou professionnel que vous voudriez construire en France votre mode de vie actuel que vous appréciez beaucoup la place de la France sur le paysage mondial : 3ème économie mondiale, leader aéronautique, agroalimentaire, industrie du luxe … Richesse de la culture en France : science, Arts, littérature…"
        },
        {
            "question": "2. Combien de fois rentrez-vous dans votre pays ?",
            "answer": "Il faut dire la vérité, ils ont votre passeport sous la main et peuvent vérifier cette information."
        },
        {
            "question": "3. Avez-vous des liens en France ?",
            "answer": "Parlez de vos amis, de votre famille si vous en avez en France. Parlez de vos liens, vos habitudes pour montrer votre intégration et vos liens forts en France."
        },
        {
            "question": "4. Quelles langues parlez-vous au travail?",
            "answer": "Le français visiblement, si ce n'est pas le cas, mettez en avant les moments ou projets où vous devez interagir en français."
        },
        {
            "question": "5. Faites-vous partie d'une association ?",
            "answer": "Ils vont enquêter sur vous donc soyez tout simplement honnête."
        },
        {
            "question": "6. Que fait votre association et où est son siège ?",
            "answer": ""
        },
        {
            "question": "7. Quelles sont les nationalités des personnes de votre entourage ?",
            "answer": "Soyez honnête mais mettez en avant vos amis, collègues et connaissances françaises."
        },
        {
            "question": "8. Envoyez-vous de l'argent à votre pays d'origine?",
            "answer": ""
        },
        {
            "question": "9. Quelles sont les villes de France que vous avez visitées ?",
            "answer": "Pour ma part, j'ai visité: Colmar, Strasbourg, Deauville, Tours, Lille, Dinard, Mont Saint Michel, Saint Malo, etc. Soyez honnête mais montrez votre intérêt à la France et ses richesses."
        },
        {
            "question": "10. Qu'avez-vous en plus en France que vous n'avez pas dans votre pays ?",
            "answer": "La liberté d'expression, l'accès à l'emploi, l'accès aux soins, l'accès à l'instruction, etc."
        },
        {
            "question": "11. Quelle est la devise de la République ?",
            "answer": "Liberté: Les libertés fondamentales sont garanties : liberté de pensée, de croyance, de s'exprimer, de se réunir…… Liberté: Les libertés fondamentales sont garanties : liberté de pensée, de croyance, de s'exprimer, de se réunir…… Egalité: Tous les citoyens ont les mêmes droits et les mêmes devoirs quelques soit leur sexe, leur origine, leur religion, leurs opinions ou leur orientation sexuelle Egalité: Tous les citoyens ont les mêmes droits et les mêmes devoirs quelques soit leur sexe, leur origine, leur religion, leurs opinions ou leur orientation sexuelle Fraternité: La Fraternité évoque la solidarité entre les citoyens Fraternité: La Fraternité évoque la solidarité entre les citoyens"
        },
        {
            "question": "12. Peut-on rajouter une 4ème valeur?",
            "answer": "La laïcité"
        },
        {
            "question": "13. C'est quoi la laïcité ?",
            "answer": "La laïcité est régie par 3 principes : liberté de conscience, la séparation entre les pouvoirs publics et religieux, et l'égalité devant la loi quel que soit la religion. La France devint laïque en le 9 Décembre 1905."
        },
        {
            "question": "14. Qu'est-ce que la démocratie ?",
            "answer": "C'est un régime politique où le pouvoir est détenu par le peuple. Les démocraties peuvent être indirectes quand le pouvoir est exercé par des représentants élus lors du suffrage universel."
        },
        {
            "question": "15. Depuis quand la France est devenue démocratique ?",
            "answer": "Depuis la mise en place du suffrage universel Masculin en 1848 pendant la deuxième république."
        },
        {
            "question": "16. Etes-vous d'accord avec la démocratie ?",
            "answer": "EVIDEMMENT➔ Car pour moi il n' y a pas de meilleur régime qu'un régime démocratique parce que la loi y est la même pour tous et seule la démocratie instaure et garantit les libertés individuelles. De plus c'est le peuple qui élit ses représentant."
        },
        {
            "question": "17. Quels sont les droits et les devoirs du citoyen français ?",
            "answer": "Les droits : accès aux emplois publics, éducation, droit de vote Les devoirs : Respect des lois et règlements, contribution au financement des services publics, contribution à la défense nationale."
        },
        {
            "question": "18. Quelle est la population de la France ?",
            "answer": "67 422 000 Habitants."
        },
        {
            "question": "19. Quelle est la population de votre ville de résidence ?",
            "answer": "Paris : 2.175.601 habitants"
        },
        {
            "question": "20. Si on vous accorde la nationalité française vous allez pouvoir voter à quelles  élections ?",
            "answer": "Municipales (6ans-2026), Départementales (6ans- 2021), régionales (6ans 2021), législatives (5ans-2022), Présidentielles (5ans-2022), Européennes (5ans-2024)"
        },
        {
            "question": "21. Quelles sont les prochaines élections ?",
            "answer": "Les départementales et les régionales en 2027 Les législatives et les présidentielles en 2027 Les élections municipales en 2026"
        },
        {
            "question": "22. Quelles sont les institutions françaises",
            "answer": "- Exécutif : constitué par le président et le gouvernement - Législatif : constitué par le Sénat (Sénateurs) et l'assemblée Nationale (Députés) - Judiciaire : exercé par les juges et les magistrats"
        },
        {
            "question": "23. Quels sont les symboles de la France ?",
            "answer": "Le Drapeau Tricolore (Bleu , Blanc, Rouge), l'Hymne national (La marseillaise), la Marianne, la devise de la France, le 14 Juillet, le coq, le Faisceau de licteur, le sceau et la fleur de Lys."
        },
        {
            "question": "24. Citez des fleuves en France",
            "answer": "La Seine, La Loire, La Garonne, Le Rhône, La Marne, La Dordogne……"
        },
        {
            "question": "25. Enumérez des personnages français connus",
            "answer": "Littérature: Honoré de Balzac, Victor Hugo, Emile Zola, Albert CamusPhilosophie: Voltaire, Jean- Paul Sartre, Jean-Jacques RousseauPeinture: Paul Cézanne, Claude Monet Musique: Johnny Hallyday, Charles Aznavour, Edith PiafScience: D'Alembert, Coulomb, Marie Curie, René Decartes Sport: Zidane, Platini, Yannick Noah, MbappéGuerre: Napoléon, Jeanne d'ArcArchitecture: Gustave Eiffel, Jean Nouvel Littérature: Honoré de Balzac, Victor Hugo, Emile Zola, Albert Camus Littérature: Honoré de Balzac, Victor Hugo, Emile Zola, Albert Camus Philosophie: Voltaire, Jean- Paul Sartre, Jean-Jacques Rousseau Philosophie: Voltaire, Jean- Paul Sartre, Jean-Jacques Rousseau Peinture: Paul Cézanne, Claude Monet Peinture: Paul Cézanne, Claude Monet Musique: Johnny Hallyday, Charles Aznavour, Edith Piaf Musique: Johnny Hallyday, Charles Aznavour, Edith Piaf Science: D'Alembert, Coulomb, Marie Curie, René Decartes Science: D'Alembert, Coulomb, Marie Curie, René Decartes Sport: Zidane, Platini, Yannick Noah, Mbappé Sport: Zidane, Platini, Yannick Noah, Mbappé Guerre: Napoléon, Jeanne d'Arc Guerre: Napoléon, Jeanne d'Arc Architecture: Gustave Eiffel, Jean Nouvel Architecture: Gustave Eiffel, Jean Nouvel"
        },
        {
            "question": "26. Qui est la Marianne ?",
            "answer": "C'est un des symboles de la France, paysanne au bonnet phrygien qui incarne la République et les valeurs de la liberté et de démocratie. Elle existe sur les pièces de monnaie. Elle apparaît sur le tableau de Eugène Delacroix."
        },
        {
            "question": "27. Quel est l'hymne national de la France ?",
            "answer": "C'est La Marseillaise, qui est à la base un chant patriotique de la Révolution écrit par Rouget de L'Isle en 1792 quand la France a déclaré la guerre à l'Autriche."
        },
        {
            "question": "28. Quelles sont les 3 types de collectivités en France ?",
            "answer": "– 36 000 Communes – 101 Départements: 96 en France métropolitaine + 5 outre-mer – 18 Régions:12 en Métropole + la corse qui n'est pas une région mais qui en a les compétences et 5 en outre-mer"
        },
        {
            "question": "29. Donnez des exemples de Régions françaises",
            "answer": "Bretagne, Normandie, Corse, Haut de France, Auvergne Rhône-Alpes, etc."
        },
        {
            "question": "30. Pouvez-vous citer des régions d'outre-mer",
            "answer": "Les 5 régions sont: Guadeloupe, Martinique, Guyane, Réunion et Mayotte"
        },
        {
            "question": "31. Donnez des exemples de départements français",
            "answer": "Juras, Paris , Essonne, Doubs, Tarn, les Yvelines, Hauts de Seine…"
        },
        {
            "question": "32. Quel est le nom de votre maire et votre département ?",
            "answer": "Il faut se renseigner en ligne. Pour Paris, il s'agit de Anne Hidalgo."
        },
        {
            "question": "33. Donnez des noms de grandes villes françaises",
            "answer": "Paris, Marseille, Lyon, Bordeaux, Toulouse …."
        },
        {
            "question": "34. Quel est l'emblème de la France et que signifie ses couleurs ?",
            "answer": "L'emblème de la France est le drapeau tricolore, bleu, blanc et rouge. Le blanc est la couleur des rois, le bleu est la couleur de Paris et le rouge fait référence au sang versé pour la libération du peuple."
        },
        {
            "question": "35. Que fête-t-on le 1er mai ?",
            "answer": "La fête du travail, c'est un jour férié"
        },
        {
            "question": "36. Citez 3 monuments historiques",
            "answer": "La grotte de Lascaux, Château de Versailles, le Louvre, Château de Chambord, Palais du Luxembourg …"
        },
        {
            "question": "37. Citez des chaînes de montagnes en France",
            "answer": "Alpes, Pyrénées, Vosges, Jura, Massif central …"
        },
        {
            "question": "38. Quel est le point culminant en France ?",
            "answer": "Le Mont Blanc"
        },
        {
            "question": "39. Citez des monuments parisiens",
            "answer": "Le musée du Louvre, le Sacré-Cœur, La cathédrale Notre Dame, La tour Eiffel, L'arc de triomphe"
        },
        {
            "question": "40. Quels sont les pays frontaliers avec la France ?",
            "answer": "(8) Allemagne, Belgique, Espagne, Luxembourg, Suisse, Andorre, Monaco, Italie"
        },
        {
            "question": "41. Combien de pays comporte l'Union Européenne ?",
            "answer": "27 Depuis la sortie du royaume uni en Janvier 2020"
        },
        {
            "question": "42. Citez des personnes naturalisées",
            "answer": "Marie Curie (physicienne Polonaise) Dalida (Chanteuse et mannequin d'origine italienne et égyptienne)"
        },
        {
            "question": "43. Donnez le nom de littéraires français et les titres de leurs écrits",
            "answer": "Baudelaire, Fleurs du mal Emile Zola, L'argentVictor Hugo, les Misérables Baudelaire, Fleurs du mal Emile Zola, L'argent Victor Hugo, les Misérables"
        },
        {
            "question": "44. Quel est l'âge obligatoire de l'école en France ?",
            "answer": "De 3 à 16 ans révolus."
        },
        {
            "question": "45. Que représente le jour du 11 novembre ?",
            "answer": "C'est l'Armistice de 1918, signé le 11 novembre et qui marque la fin de la 1ère guerre mondiale."
        },
        {
            "question": "46. Qui est Brigitte Bardot?",
            "answer": "C'est une actrice de cinéma, chanteuse et militante pour la cause animale. Tu peux citer quelques-uns de ses titres, comme « Moi je joue » et « Harley Davidson »."
        },
        {
            "question": "47. C'est quoi l'Hôtel de Ville ?",
            "answer": "La mairie principale d'une ville importante."
        },
        {
            "question": "48. Qui a écrit « Les Trois Mousquetaires »?",
            "answer": "Alexandre Dumas"
        },
        {
            "question": "49. Citez un grand événement sportif français",
            "answer": "Le Tour de France : une épreuve cycliste Roland Garros : tournoi de Tennis Ls 24h du Mans: compétition automobile"
        },
        {
            "question": "50. Citez des plats typiques français",
            "answer": "Quiche lorraine (Lorraine / Nancy), Bouillabaisse (Bouche du Rhône / Marseille), Choucroute (Alsace / Strasbourg), Tartiflette (Savoie / Chambéry), Coq au Vin."
        },
        {
            "question": "51. A-t-on le droit de porter des signes religieux en public?",
            "answer": "Oui sauf dans les écoles, les collèges et les lycées publics selon la loi de 2004."
        },
        {
            "question": "52. Où se trouve le siège du parlement européen?",
            "answer": "Strasbourg"
        },
        {
            "question": "53. Ou se trouve le siège de l'union européen?",
            "answer": "Bruxelles"
        },
        {
            "question": "54. Combien d'étoiles comporte le drapeau de l'Europe ?",
            "answer": "12"
        },
        {
            "question": "55. Quelle est la devise de l'Europe ?",
            "answer": "Unis dans la diversité"
        },
        {
            "question": "56. Quelle est l'Hymne Européen ?",
            "answer": "L'ode à la joie (de Beethoven)"
        },
        {
            "question": "57. Quelles sont les symboles de l'Europe ?",
            "answer": "L'euro, le drapeau, la devise, l'hymne européen et la journée de l'Europe (9 Mai). Questions sur l'histoire de France pour la naturalisation"
        }
    ],
    "Histoire": [
        {
            "question": "58. Quel événement de l'histoire de France vous a-t-il marqué ?",
            "answer": "Vous pouvez citer la coupe du Monde de 2018 ou la révolution française ou encore les samedis des gilets jaunes par exemple."
        },
        {
            "question": "59. A quelle date a eu la Révolution ?",
            "answer": "La Révolution a eu lieu en 1789."
        },
        {
            "question": "60. Quel événement marquant de la Révolution ? Et dans quel contexte elle a émergé  ?",
            "answer": "Le 14 Juillet 1789 a marqué la prise de la prison de la Bastille, événement inaugural du début de la Révolution. Elle a eu lieu suite à une crise agricole qui a donné lieu à une grande crise économique et une inflation importante qui se confrontait à des décisions de hausse d'impôts prises par le roi."
        },
        {
            "question": "61. Qui était le roi pendant la Révolution ?",
            "answer": "C'était le roi Louis XVI qui a été guillotiné."
        },
        {
            "question": "62. A quoi servait la Bastille avant sa démolition ?",
            "answer": "Elle servait comme prison d'état dans laquelle a été emprisonné Voltaire, Sade …"
        },
        {
            "question": "63. Qui est Jean Moulin ?",
            "answer": "Ce fut un haut fonctionnaire et une icône de la résistance française à l'occupant nazi. Pendant la 2nde guerre mondiale. Il mourut en gare de Metz suite aux tortures et mauvais traitements subis par les Allemands."
        },
        {
            "question": "64. Dans quelle époque ont été bâties les cathédrales gothiques?",
            "answer": "Au Moyen-âge."
        },
        {
            "question": "65. Quand a eu lieu la Vème République et quel fait marquant ?",
            "answer": "La constitution de la Vème République a été adoptée en 1958 et a marqué la séparation entre le pouvoir exécutif, législatif et judiciaire."
        },
        {
            "question": "66. Quand a eu lieu la déclaration des droits de l'homme et du citoyen ?",
            "answer": "La même année que la révolution française, le 26 août 1789 ➔ auteur jul: Champion de Cicé Nommé garde des sceaux par Louis XVI."
        },
        {
            "question": "67. Donnez-moi les dates des 2 guerres mondiales",
            "answer": "1ère guerre : de 1914 au 11 novembre 1918 2ème guerre : de 1939 au 8 mai 1945 1ère guerre : de 1914 au 11 novembre 1918 2ème guerre : de 1939 au 8 mai 1945"
        },
        {
            "question": "68. Où se trouve les plages du débarquement des alliés pendant la 2eme guerre mondiale ?",
            "answer": "En Normandie (Opération NEPTUNE, le 6 Juin 1944 ➔ Utah Beach, Omaha Beach, Gold Beach, Juno Beach…..)"
        },
        {
            "question": "69. Dans quelle République sommes-nous ?",
            "answer": "C'est la Vème République fondée en 1958 par Charles de Gaulle. Charles de Gaulle était un général et chef de la France Libre. Il s'est réfugié en Angleterre quand l'Allemagne a attaqué la France pendant la 2nde guerre mondiale"
        },
        {
            "question": "70. En quelle année fut fondée la 1ère République ?",
            "answer": "En 1792, 3 ans après la révolution."
        },
        {
            "question": "71. Le nom des soldats français pendant la 1ère guerre ?",
            "answer": "Les poilus"
        },
        {
            "question": "72. Qui sont les alliés pendant les 2 guerres mondiales ?",
            "answer": "– 1ère guerre : France, Angleterre, Russie, US – 2ème guerre : France, Angleterre, URSS, US"
        },
        {
            "question": "73. Qui sont les ennemis pendant les 2 guerres mondiales ?",
            "answer": "– 1ère guerre : Allemagne, Autriche Hongrie, Empire Ottoman – 2ème guerre : Allemagne, Japon, Italie"
        },
        {
            "question": "74. Donnez le nom de rois français",
            "answer": "Charlemagne, Clovis, Louis XIV, Louis XVI …"
        },
        {
            "question": "75. Donnez le nom de reines de France",
            "answer": "Anne d'Autriche, Marie-Antoinette d'Autriche, Joséphine de la Pagerie, Anne de Bretagne, Aliénor d'Aquitaine, Catherine de Médicis, Anne de Médicis.."
        },
        {
            "question": "76. Citez-moi les présidents de la Vème république dans l'ordre",
            "answer": "Charles de Gaulle, George Pompidou, Valerie Giscard d'Estaing, François Mitterrand, Jacques Chirac, Nicolas Sarkozy, François Hollande, Emanuel Macron"
        },
        {
            "question": "77. Citez-moi des personnes qui ont marqué l'histoire de la France",
            "answer": "Napoléon, De Gaulle, Charlemagne, Jeanne D'Arc …"
        },
        {
            "question": "78. Qui a instauré le code civil en France ?",
            "answer": "Napoléon Bonaparte en 1804 sous la gouvernance de Napoléon 1er, 12 ans après la fondation de la première république."
        },
        {
            "question": "79. Qui a construit le château de Versailles ?",
            "answer": "Louis XIV"
        },
        {
            "question": "80. Qui a construit l'Arc de triomphe",
            "answer": "Napoléon Ier en 1806"
        },
        {
            "question": "81. C'est quoi la guerre des 100 ans ?",
            "answer": "Il s'agit d'un conflit entre les rois de France et de l'Angleterre pendant un siècle pendant le Moyen-Age. Cette guerre a d'ailleurs duré 116 ans plutôt !"
        },
        {
            "question": "82. Quelle est la bataille de Verdun ?",
            "answer": "Bataille qui s'est déroulée en 1916 entre l'armée française et allemande à Lorraine, pendant la 1ère guerre mondiale. Elle a fait beaucoup de victimes des deux camps et le résultat militaire fut nul."
        },
        {
            "question": "83. La Tour Eiffel a été construite pour quel événement ?",
            "answer": "Pour l'exposition universelle de Paris en 1889"
        },
        {
            "question": "84. A quelle année les femmes ont eu le droit de voter en France ?",
            "answer": "21 Avril 1944, durant la seconde guerre mondiale, un siècle après le droit de vote masculin."
        },
        {
            "question": "85. A quelle année les Hommes ont eu le droit de voter en France ?",
            "answer": "1848 (pendant la 2eme République, Age minimum 21 ans)."
        },
        {
            "question": "86. A quel homme politique se rattache la création de l'école publique ?",
            "answer": "Jules Ferry (Depuis la Loi Jules Ferry du 28 Mars 1882) a crée l'école publique, laïque, gratuite et obligatoire."
        },
        {
            "question": "87. Citez 3 pays qui ont fait partie de l'Empire colonial français",
            "answer": "La Tunisie, l'Algérie, Côte d'Ivoire, Mali, Sénégal , Congo Brazzaville…"
        },
        {
            "question": "88. En quelle année a eu lieu l'abolition de l'esclavage en France ?",
            "answer": "En 1848, la même année où la France est devenue démocratique via le votes masculins."
        },
        {
            "question": "89. Qui est Voltaire ? Qu'a-t-il écrit?",
            "answer": "Voltaire est un écrivain et philosophe français qui a marqué le 18ème siècle, appelé siècle des Lumières. Il a écrit « Traité sur la tolérance » et « l'Ingénu » …"
        },
        {
            "question": "90. Qu'est-ce que la philosophie des Lumières?",
            "answer": "C'est un mouvement philosophique qui a émergé dans le 18ème siècle en Europe où des philosophes européens avaient pour objectif de combattre l'obscurantisme, l'ignorance et diffuser les connaissances"
        },
        {
            "question": "91. Citez quelques philosophes français des lumières",
            "answer": "Montesquieu, Voltaire, Rousseau, Diderot … Questions sur la politique en France pour la naturalisation"
        }
    ],
    "Politique": [
        {
            "question": "92. Quel est le nom du Président actuel et le précédent ?",
            "answer": "Le président actuel est Emmanuel Macron et le précédent est François Hollande."
        },
        {
            "question": "93. Qui est le chef des armées ?",
            "answer": "Le Président de la République"
        },
        {
            "question": "94. Donnez le nom de quelques ministres actuels",
            "answer": ""
        },
        {
            "question": "95. Citer quelques anciens Ministres (F. HOLLANDE)",
            "answer": "➢ 1er Ministre: BERNARD CAZENEUVE ➢ Ministre de l'intérieur : BRUNO LE ROUX ➢ Ministre de l'environnement : SÉGOLÈNE ROYAL ➢ Ministre de la défense : JEAN-YVES LE DRIAN"
        },
        {
            "question": "96. Qu'est-ce que le pouvoir exécutif ?",
            "answer": "Le pouvoir exécutif est partagé entre le président de la République (chef de l'État) et le gouvernement dirigé par le Premier ministre. Le rôle du pouvoir exécutif est d'exécuter les lois et décisions de justice. Il dirige la police, la force militaire, l'administration, la diplomatie."
        },
        {
            "question": "97. Qu'est-ce que le pouvoir législatif ?",
            "answer": "Constitué du Sénat et de l'assemblée Nationale : • Il vote les Lois sur une proposition émanant du gouvernement (Projet de loi) ou des parlementaires (Propositions de loi) • Il a un pouvoir de contrôle sur le pouvoir exécutif • Il vote le budget de l'état"
        },
        {
            "question": "98. Qu'est-ce que le pouvoir Judiciaire ?",
            "answer": "Ce pouvoir est confié aux Juges et Magistrats Il a pour rôle de contrôler l'application de la loi et sanctionne son non-respect."
        },
        {
            "question": "99. Pour combien de temps est élu le Président, par quel scrutin et qui a le droit de  voter ?",
            "answer": "Le Président est élu pour 5 ans au suffrage universel direct, par un scrutin à la majorité absolue à 2 tours. Ceux qui peuvent voter sont les citoyens français majeurs."
        },
        {
            "question": "100. Quel est le siège de la Présidence ?",
            "answer": "Le palais de l'Elysée"
        },
        {
            "question": "101. Qu'est-ce que le parlement ?",
            "answer": "Le parlement est composé de 2 chambres : la chambre basse L'ASSEMBLÉE NATIONALE (les députés) et la chambre haute LE SÉNAT (les sénateurs). Le parlement détient le pouvoir législatif (vote des lois)."
        },
        {
            "question": "102. Qu'est-ce que l'assemblée nationale ?",
            "answer": "On l'appelle aussi la chambre basse où siègent les 577 députés de l'Assemblée Nationale. Ils détiennent le pouvoir législatif avec le Sénat."
        },
        {
            "question": "103. Pour combien de temps sont élus les députés et par quel scrutin ?",
            "answer": "Ils sont élus pour 5 ans au suffrage universel direct uninominal majoritaire à deux tours."
        },
        {
            "question": "104. Quel est le siège de l'Assemblée nationale ?",
            "answer": "Au Palais Bourbon"
        },
        {
            "question": "105. Quel est le siège du sénat ?",
            "answer": "Au Palais de Luxembourg"
        },
        {
            "question": "106. Quel est le nom du président actuel de l'Assemblée nationale ?",
            "answer": "Yaël Braun-Pivet (depuis 2022)"
        },
        {
            "question": "107. Qu'est-ce que le Sénat ?",
            "answer": "On l'appelle aussi la chambre haute où siègent les 348 sénateurs, ils détiennent une partie du pouvoir législatif avec l'assemblé national."
        },
        {
            "question": "108. Comment sont élus les sénateurs ?",
            "answer": "Ils sont élus au suffrage universel indirect par 150 000 grands électeurs (maires, conseillers généraux…)"
        },
        {
            "question": "109. Qui a le pouvoir de diriger la France en cas de décès du Président ?",
            "answer": "C'est le président du Sénat."
        },
        {
            "question": "110. Quel est le nom du président actuel du Sénat ?",
            "answer": "Gérard Larcher (depuis 2014)"
        },
        {
            "question": "111. Qu'est-ce que la cohabitation ?",
            "answer": "C'est quand le Président est dans l'obligation de nommer un Premier Ministre qui n'appartient pas au même parti politique que lui. La situation s'impose quand la majorité des députés ne sont pas du même parti politique que le Président. Ex : Mitterrand/Chirac ou Chirac/Jospin."
        },
        {
            "question": "112. Comment devient-on Ministre ou Premier Ministre ?",
            "answer": "Le Président nomme son premier ministre, le premier ministre définit son gouvernement et le suggère au Président."
        },
        {
            "question": "113. Où sont les bureaux du Premier Ministre ?",
            "answer": "A l'hôtel Matignon."
        },
        {
            "question": "114. Quels sont les 4 premiers personnages de l'état ?",
            "answer": "Le président, le premier ministre, le président du sénat et enfin le président de l'assemblée nationale."
        },
        {
            "question": "115. Comment fonctionnent les élections municipales ?",
            "answer": "Pour les communes de plus de 1 000 habitants, les conseillers municipaux sont élus au scrutin proportionnel à deux tours."
        },
        {
            "question": "116. Donnez le nom d'une personnalité féminine politique",
            "answer": "Simone Veil, Ségolène Royal, Martine Aubry …"
        },
        {
            "question": "117. Qu'est-ce que la loi Veil ?",
            "answer": "C'est le droit à l'avortement et la contraception pour les femmes qui a été préparée et défendue par Simone Veil ministre de la santé sous la présidence de Valery Giscard d'Estaing."
        },
        {
            "question": "118. Quelle personne décide de vous octroyer la nationalité française ?",
            "answer": "Ministre de l'intérieur"
        },
        {
            "question": "119. Qui gère les relations entre l'état et les institutions religieuses ?",
            "answer": "Le ministère du culte, charge du ministre de l'intérieur."
        },
        {
            "question": "120. C'est quoi la dernière loi qui a marqué l'opinion publique ?",
            "answer": "Allez vérifier sur internet mais actuellement, il s'agit des lois sur la réforme globale des retraites."
        }
    ]
}

export default quiz120Data
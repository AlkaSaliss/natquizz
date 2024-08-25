interface QuizQuestion {
    id: string;
    question: string;
    answer: string;
}

interface QuizData {
    [key: string]: QuizQuestion[];
}


const freestyleQuizData: QuizData = {
    "politique": [
        {
            "id": "politique__Q1",
            "question": "Quelles sont les valeurs ou la devise de la République française ?",
            "answer": "Liberté, égalité, fraternité."
        },
        {
            "id": "politique__Q2",
            "question": "Si l'on devait ajouter une valeur, quelle sera-t-elle selon vous ?",
            "answer": "La laïcité."
        },
        {
            "id": "politique__Q3",
            "question": "Qu'est-ce que la laïcité ?",
            "answer": "La laïcité garantit la liberté de conscience. De celle-ci découle la liberté de manifester ses croyances ou convictions dans les limites du respect de l'ordre public. La laïcité implique la neutralité de l'État et impose l'égalité de tous devant la loi sans distinction de religion ou conviction."
        },
        {
            "id": "politique__Q4",
            "question": "Qu'est-ce que pour vous la démocratie ?",
            "answer": "La démocratie représente un système politique dans lequel le peuple est souverain. C'est un régime politique dans lequel tous les citoyens participent aux décisions publiques et à la vie politique du pays."
        },
        {
            "id": "politique__Q5",
            "question": "Quelles sont les formes de la démocratie ?",
            "answer": "Il y a trois formes de démocratie. La démocratie directe, participative et représentative."
        },
        {
            "id": "politique__Q6",
            "question": "Êtes-vous d'accord avec le régime démocratique ?",
            "answer": "Absolument."
        },
        {
            "id": "politique__Q7",
            "question": "Quelles formes libertés sont garanties en démocratie ?",
            "answer": "La liberté de penser. La liberté de croire ou de ne pas croire. La liberté d'expression."
        },
        {
            "id": "politique__Q8",
            "question": "Pensez-vous que la liberté d'expression est absolue ?",
            "answer": "Non, la liberté est garantie mais elle n'est pas absolue car les libertés des uns s'arrêtent là où commence celle des autres."
        },
        {
            "id": "politique__Q9",
            "question": "Quels sont les droits et devoirs du citoyen français ?",
            "answer": "Tous les citoyens ont le droit de voter, de circuler, de s'exprimer de croire ou de ne pas croire en une religion, de créer des associations, de disposer de leur corps ainsi que le droit à la propriété. Pour les devoirs, tous les citoyens doivent respecter la loi, les droits des autres citoyens et l'environnement. Ils doivent également payer les taxes et les impôts et défendre la patrie si cette dernière est menacée."
        },
        {
            "id": "politique__Q10",
            "question": "Quels sont les symboles de la République française ?",
            "answer": "Il y a plusieurs choses qui symbolisent la République. On citera par exemple le drapeau tricolore, la Marseillaise, Marianne, le bonnet phrygien, la devise liberté, égalité, fraternité, la fleur de lice, le 14 juillet."
        },
        {
            "id": "politique__Q11",
            "question": "Quels sont les couleurs du drapeau français ?",
            "answer": "Les couleurs du drapeau français sont bleu, blanc, rouge."
        },
        {
            "id": "politique__Q12",
            "question": "Que représentent les couleurs du drapeau français ?",
            "answer": "Le bleu représente la couleur de Paris, le blanc la couleur des rois et le rouge, également la couleur de Paris, en référence au sang versé pour la libération du peuple."
        },
        {
            "id": "politique__Q13",
            "question": "Qui est Marianne ?",
            "answer": "Marianne est une figure symbolique de la République française. Sous l'apparence d'une femme coiffée d'un bonnet phrygien, elle représente la République française et ses valeurs contenues dans la devise liberté, égalité, fraternité."
        },
        {
            "id": "politique__Q14",
            "question": "Qui est aujourd'hui le président de la République ?",
            "answer": "C'est Emmanuel Macron."
        },
        {
            "id": "politique__Q15",
            "question": "Qui était président de la République avant lui ?",
            "answer": "C'était François Hollande."
        },
        {
            "id": "politique__Q16",
            "question": "Qui est le premier ministre actuel ?",
            "answer": "C'est Gabriel Attal."
        },
        {
            "id": "politique__Q17",
            "question": "Qui était premier ministre avant lui ?",
            "answer": "C'était Elisabeth Bourne."
        },
        {
            "id": "politique__Q18",
            "question": "Dans quelle république sommes-nous aujourd'hui ?",
            "answer": "Nous sommes dans la Ve République."
        },
        {
            "id": "politique__Q19",
            "question": "Quand sont les dates des précédentes républiques ?",
            "answer": "La première république de 1792 à 1804. La deuxième république de 1848 à 1852. La troisième république de 1870 à 1940. La quatrième république de 1946 à 1958. La cinquième république de 1958 à aujourd'hui."
        },
        {
            "id": "politique__Q20",
            "question": "Qui a instauré la cinquième république ?",
            "answer": "C'est le général Charles de Gaulle."
        },
        {
            "id": "politique__Q21",
            "question": "Où se trouve le siège de la présidence de la République ?",
            "answer": "Il se trouve à l'Élysée."
        },
        {
            "id": "politique__Q22",
            "question": "Citer dans l'ordre les présidents de la Ve République.",
            "answer": "Charles de Gaulle (1958-1969), Georges Pompidou (1969-1974), Valéry Giscard d'Estaing (1974-1981), François Mitterrand (1981-1995), Jacques Chirac (1995-2007), Nicolas Sarkozy (2007-2012), François Hollande (2012-2017), Emmanuel Macron (depuis 2017)"
        },
        {
            "id": "politique__Q23",
            "question": "Citer trois anciens premiers ministres français de la Ve République.",
            "answer": "Dominique de Villepin, Alain Juppé, Élisabeth Borne, Édouard Philippe, Jean Castex, ..."
        },
        {
            "id": "politique__Q24",
            "question": "Citer trois ministres du gouvernement actuel.",
            "answer": "On citera ceux du gouvernement Attal, qui est le gouvernement le plus récent à la date de la réalisation de cette vidéo. Les plus connus sont Gérald Darmanin, Bruno Le Maire, Eric Dupont-Moretti."
        },
        {
            "id": "politique__Q25",
            "question": "Pour combien de temps est élu le président de la République ?",
            "answer": "Le président de la République est élu pour un mandat de cinq ans."
        },
        {
            "id": "politique__Q26",
            "question": "Par quel scrutin et pour combien de mandats peut être élu le président de la République ?",
            "answer": "Le mandat du président est renouvelable une seule fois pour une durée de cinq ans. Il est élu au suffrage universel direct par un scrutin à la majorité absolue à deux tours."
        },
        {
            "id": "politique__Q27",
            "question": "Qui a le droit de voter aux élections ?",
            "answer": "Tout citoyen français majeur."
        },
        {
            "id": "politique__Q28",
            "question": "Quel est l'âge de la majorité en France ? ",
            "answer": "La majorité en France est de 18 ans."
        },
        {
            "id": "politique__Q29",
            "question": "Qu'est-ce que le Parlement ?",
            "answer": "Le Parlement est une assemblée élue par le peuple qui assure la représentation du peuple. Elle est composée de deux chambres. La chambre haute, c'est là où siègent les sénateurs. La chambre basse, c'est là où siègent les députés."
        },
        {
            "id": "politique__Q30",
            "question": "Quel est le rôle exact du Parlement ?",
            "answer": "Le Parlement en France revoit, corrige et vote les lois. Il détient ce que l'on appelle le pouvoir législatif."
        },
        {
            "id": "politique__Q31",
            "question": "Citer les différentes institutions politiques en France",
            "answer": "le pouvoir exécutif, le pouvoir législatif, le pouvoir judiciaire exercé par les juges et les magistrats."
        },
        {
            "id": "politique__Q32",
            "question": "Qu'est-ce que le pouvoir exécutif et quel est son rôle ?",
            "answer": "Le pouvoir exécutif est le pouvoir incarné par le Président de la République et par son gouvernement. Son rôle est de mettre en œuvre les lois et conduire la politique nationale. À cette fin, il a le pouvoir d'édicter des règlements et il dispose de l'administration et de la force armée."
        },
        {
            "id": "politique__Q33",
            "question": "Qu'est-ce que le pouvoir législatif et quel est son rôle ?",
            "answer": "En France, le pouvoir législatif est exercé par les deux Chambres du Parlement, le Sénat, sénateur et l'Assemblée nationale, député. Il est chargé de la rédaction et de l'adoption des lois, mais également du contrôle de l'exécutif."
        },
        {
            "id": "politique__Q34",
            "question": "Qu'est-ce que le pouvoir judiciaire et quel est son rôle ?",
            "answer": "Le pouvoir judiciaire est, avec les pouvoirs exécutif et législatif, l'un des trois pouvoirs constituant l'État français et il respecte en application de la démocratie la séparation des pouvoirs. Il est entre les mains des juges et des magistrats. Il a pour rôle de contrôler l'application de la loi et sanctionne son non-respect."
        },
        {
            "id": "politique__Q35",
            "question": "Comment sont élus les députés ?",
            "answer": "Les députés sont élus au suffrage universel direct uninominal majoritaire à deux tours."
        },
        {
            "id": "politique__Q36",
            "question": "Qui est le président ou la présidente de l'Assemblée nationale ?",
            "answer": "C'est Yaël Braun-Pivet depuis 2022."
        },
        {
            "id": "politique__Q37",
            "question": "Combien d'années dure son mandat ?",
            "answer": "Son mandat est de cinq ans."
        },
        {
            "id": "politique__Q38",
            "question": "Qu'est-ce que la Chambre basse ?",
            "answer": "C'est l'Assemblée nationale."
        },
        {
            "id": "politique__Q39",
            "question": "Qu'est-ce que la Chambre haute ?",
            "answer": "C'est le Sénat."
        },
        {
            "id": "politique__Q40",
            "question": "Qu'est-ce que le Sénat ?",
            "answer": "Le Sénat constitue la Chambre haute du Parlement français. C'est là où siègent les sénateurs. Il détient le pouvoir législatif avec l'Assemblée nationale."
        },
        {
            "id": "politique__Q41",
            "question": "Comment sont élus les sénateurs ?",
            "answer": "Les sénateurs français sont élus au suffrage universel indirect par un collège de grands électeurs, 150 000 grands électeurs, maires, conseillers généraux."
        },
        {
            "id": "politique__Q42",
            "question": "Pour combien d'années sont élus les sénateurs ?",
            "answer": "Le Sénat est renouvelé par moitié tous les trois ans. La durée totale du mandat est donc de six ans."
        },
        {
            "id": "politique__Q43",
            "question": "Quelle est la différence entre un député et un sénateur ?",
            "answer": "Le rôle du sénateur est d'examiner très en détail et voter les lois, ainsi que de contrôler l'action du gouvernement.Mais à la différence des députés et de l'Assemblée nationale, les sénateurs et le Sénat défendent, en plus, les intérêts des communes, des départements et des régions. C'est ce que l'on appelle les collectivités territoriales."
        },
        {
            "id": "politique__Q44",
            "question": "Constitutionnellement, qui a le pouvoir de diriger le pays si le président de la République décède ?",
            "answer": "C'est le président du Sénat."
        },
        {
            "id": "politique__Q45",
            "question": "Qui est le président actuel du Sénat ?",
            "answer": "C'est Gérard Larcher."
        },
        {
            "id": "politique__Q46",
            "question": "Qu'est-ce que le Conseil constitutionnel ?",
            "answer": "Le Conseil constitutionnel est une institution française créée par la Constitution de la Ve République du 4 octobre 1958. Il se prononce sur la conformité à la constitution des lois et de certains règlements dont il est saisi. Il veille à la régularité des élections nationales et référendums."
        },
        {
            "id": "politique__Q47",
            "question": "Qui est le président du Conseil constitutionnel ?",
            "answer": "En 2024, c'est Laurent Fabius."
        },
        {
            "id": "politique__Q48",
            "question": "Quelle est la dernière loi votée à l'Assemblée nationale ?",
            "answer": "La dernière loi votée est la loi renforçant la sécurité et la protection des maires et des élus locaux."
        },
        {
            "id": "politique__Q49",
            "question": "Savez-vous ce qu'est la cohabitation politique ?",
            "answer": "La cohabitation politique ou la cohabitation désigne la coexistence institutionnelle entre un chef de l'État et un chef du gouvernement, issu de la majorité parlementaire, politiquement antagoniste."
        },
        {
            "id": "politique__Q50",
            "question": "Citez un exemple de cohabitation politique en France.",
            "answer": "Mitterrand, PS, Chirac, RPR, Chirac, RPR, Jospin, PS"
        },
        {
            "id": "politique__Q51",
            "question": "Qui nomme les ministres ?",
            "answer": "C'est le Premier ministre qui nomme les ministres et les secrétaires d'État."
        },
        {
            "id": "politique__Q52",
            "question": "Qui nomme le Premier ministre de la France ?",
            "answer": "C'est le Président de la République."
        },
        {
            "id": "politique__Q53",
            "question": "Où se trouvent les bureaux du Premier ministre ?",
            "answer": "Ils se trouvent à l'hôtel Matignon, à Paris."
        },
        {
            "id": "politique__Q54",
            "question": "Qui est le maire de votre ville ?",
            "answer": "Si vous n'avez pas la réponse à cette question, cherchez vite le nom de votre maire sur Internet."
        },
        {
            "id": "politique__Q55",
            "question": "Qu'est-ce que les élections municipales ?",
            "answer": "Ce sont des élections qui permettent d'élire les membres du conseil municipal de chaque commune et qui sont appelées les conseillers municipaux. C'est eux ensuite qui élisent le maire et ses adjoints."
        },
        {
            "id": "politique__Q56",
            "question": "Quelle est l'hymne de la France ?",
            "answer": "C'est la Marseillaise."
        },
        {
            "id": "politique__Q57",
            "question": "Qui a écrit la Marseillaise ?",
            "answer": "C'est Claude Joseph Rouget de Lisle."
        },
        {
            "id": "politique__Q58",
            "question": "Connaissez-vous le premier couplet de la Marseillaise ?",
            "answer": "Oui. Si l'agent vous demande de chanter la Marseillaise, vous pourrez chanter le premier couplet."
        },
        {
            "id": "politique__Q59",
            "question": "À quelle occasion la Marseillaise a-t-elle été écrite ?",
            "answer": "La Marseillaise a été écrite dans la nuit du 25 au 26 avril 1792. À la suite de la déclaration de guerre du roi d'Autriche, elle fut composée chez le maire de Strasbourg, dénommée Dietrich. La Marseillaise s'intitula « champ de guerre pour l'armée du Rhin »."
        }
    ],
    "geographie": [
        {
            "id": "geographie__Q1",
            "question": "Citez les trois plus grandes villes françaises.",
            "answer": "Les trois plus grandes villes françaises sont Paris, Lyon et Marseille."
        },
        {
            "id": "geographie__Q2",
            "question": "Citez trois départements français.",
            "answer": "On citera par exemple le Haut-Rhin, le Bas-Rhin et la Haute-Garonne."
        },
        {
            "id": "geographie__Q3",
            "question": "Citez trois départements d'outre-mer.",
            "answer": "Les départements d'outre-mer sont la Guadeloupe, Mayotte, la Martinique, la Guyane, la Réunion. Vous pouvez en citer quelques-uns lors de votre entretien d'assimilation."
        },
        {
            "id": "geographie__Q4",
            "question": "Citez trois régions françaises.",
            "answer": "On citera par exemple l'Île-de-France, la Bretagne, la Normandie, la Corse, le Haut-de-France, l'Auvergne-Rhône-Alpes, la Provence-Alpes-Côte-d'Azur, l'Occitanie."
        },
        {
            "id": "geographie__Q5",
            "question": "Enumérez les trois types de collectivités françaises.",
            "answer": "Il y a trois types de collectivités en France. Tout d'abord, les communes. Il y en a 36 000 en France. Ensuite, les régions. La France compte 12 régions en métropole en plus de la Corse, qui n'est pas une région en soi mais qui en a les compétences, ainsi que cinq régions en outre-mer. Et enfin, les départements. La France compte 101 départements. 96 départements se trouvent dans Métropole et 5 en outre-mer. "
        },
        {
            "id": "geographie__Q6",
            "question": "Citez des fleuves français que vous connaissez.",
            "answer": "La France comporte plusieurs fleuves. On citera par exemple la Loire, le Rhône, la Seine, le Rhin, la Garonne, la Marne et la Dordogne. Vous n'êtes pas obligé d'apprendre par cœur la liste de tous les fleuves, mais vous devrez en connaître quelques-uns."
        },
        {
            "id": "geographie__Q7",
            "question": "Citez des chaînes de montagne en France que vous connaissez.",
            "answer": "Là encore, la France comporte plusieurs chaînes de montagne. On citera par exemple le Massif Central, les Alpes, les Pyrénées, les Vosges et le Jura. Là aussi, vous n'êtes pas obligé d'apprendre par cœur la liste de toutes les chaînes de montagne, mais vous devrez en connaître quelques-unes."
        },
        {
            "id": "geographie__Q8",
            "question": "En France, quel est le point culminant ?",
            "answer": "C'est le Mont Blanc, avec une altitude de 4809 mètres. Il se trouve entre la France et l'Italie."
        },
        {
            "id": "geographie__Q9",
            "question": "Quels sont les pays frontaliers ou limitrophes avec la France ?",
            "answer": "Les pays limitrophes de la France sont l'Espagne, l'Italie, la Suisse, l'Allemagne, le Luxembourg, Andorre, Monaco et la Belgique."
        },
        {
            "id": "geographie__Q10",
            "question": "Dans quelle région sommes-nous ?",
            "answer": "Donnez le nom de votre région. Par exemple, nous sommes dans la région Île-de-France."
        },
        {
            "id": "geographie__Q11",
            "question": "Dans quel département sommes-nous ?",
            "answer": "Donnez le nom de votre département. Par exemple, nous sommes dans le département du Val-de-Marne."
        },
        {
            "id": "geographie__Q12",
            "question": "Qui est le ou la maire de votre département ?",
            "answer": "Assurez-vous de bien connaître le nom de votre maire, son orientation politique ainsi que son parti politique. Par exemple, pour la ville de Paris, c'est Anne Hidalgo et elle est de gauche. Son parti politique est le Parti Socialiste PS."
        }
    ],
    "vie_privee": [
        {
            "id": "vie_privee__Q1",
            "question": "Pourquoi voulez-vous devenir français?",
            "answer": "Je classerai mes motivations selon différents axes: En termes de vie familiale, je suis en France depuis 8 ans, où j'ai réalisé la majeure partie de ma vie, y ayant fait mes études supérieures et travaillé de manière continue pendant près de 6 ans. Je vis avec ma femme ici et nous allons bientôt devenir parents, ce qui signifie que mes enfants seront également scolarisés en France. En fait, au cours de ces 8 ans, je n'ai visité mon pays d'origine que deux fois. Mes vacances et mes loisirs se déroulent aujourd'hui en France. Sur le plan politique et des valeurs, j'admire la stabilité politique et les institutions françaises, offrant une projection plus sereine sur les plans personnel et professionnel (contrairement à des pays comme le Niger, où les coups d'État sont fréquents). J'adhère pleinement aux valeurs de la France, notamment exprimées par sa devise, une réalité vécue quotidiennement et non de simples mots vides de sens. En termes professionnels, je travaille dans le domaine de l'intelligence artificielle, considéré comme la troisième révolution industrielle, où la France joue un rôle majeur. De nombreux chercheurs ayant révolutionné ce domaine sont français, et de nombreuses start-ups mondialement connues sont françaises. Personnellement, j'ai l'intention de créer une entreprise dans le domaine de l'application de l'IA à l'agriculture. Ainsi, rester dans cet écosystème français me permettra non seulement de contribuer à l'avancement de ce domaine, mais aussi de bénéficier de l'expertise présente. Enfin, cotiser en ayant la fierté de contribuer à mon pays est une valeur importante pour moi."
        },
        {
            "id": "vie_privee__Q2",
            "question": "A quelle fréquence rentrez-vous dans votre pays d'origine ?",
            "answer": "Je suis rentré 2 fois en 8 ans, en 2019 et en 2021"
        },
        {
            "id": "vie_privee__Q3",
            "question": "Êtes-vous marié ? Avez-vous un copain, copine, compagne, mari ou femme ?",
            "answer": "Oui je suis marié depuis 2019. Mais nous vivons ensemble depuis 2021."
        },
        {
            "id": "vie_privee__Q4",
            "question": "Quelles sont les activités que vous effectuez avec votre conjoint, partenaire ?",
            "answer": "Nous organisons des vacances pour explorer les différentes régions françaises. Nous nous sommes principalement concentrés sur le sud, en particulier Marseille et Nice, principalement parce que nous ne sommes pas habitués à la mer ou à l'océan. Pour ma part, j'ai également exploré un peu les montagnes, notamment à Grenoble et en Savoie. Cependant, nos projets futurs incluent de visiter davantage l'ouest, notamment la Normandie. En dehors de cela, dans notre vie quotidienne, nous allons au cinéma dans notre ville et nous visitons également les monuments et les lieux emblématiques de l'Île-de-France, tels que la tour Eiffel, le musée du Louvre et le quartier d'affaires de La Défense. D'ailleurs, nous prévoyons très prochainement de visiter le château de Versailles."
        },
        {
            "id": "vie_privee__Q5",
            "question": "Avez-vous des enfants ? Comptez-vous en avoir prochainement ?",
            "answer": "Pas encore, mais il y en a un qui est en route. Si tout se passe bien, d’ici les vacances d’été, nous serons parents."
        },
        {
            "id": "vie_privee__Q6",
            "question": "Dans le couple, qui s'occupe des enfants ? Qui s'occupe des tâches ménagères ?",
            "answer": "Nous partageons ensemble les différentes tâches. Par exemple, l'un de nous fait les courses pendant que l'autre fait la vaisselle et cuisine. Je passe l'aspirateur pendant qu'elle passe derrière moi avec la serpillière, et ainsi de suite. L'avantage d'avoir vécu seul en tant qu'étudiant puis en tant que jeune professionnel est que vous apprenez à vous occuper de la maison, à faire le ménage, etc."
        },
        {
            "id": "vie_privee__Q7",
            "question": "Avez-vous vos liens personnels et familiaux en France ?",
            "answer": "L’essentiel de mes amis se trouvent aujourd'hui ici en France. Certaines amitiés sont nées à l’école, d’autres avec des collègues, et d’autres encore avec des voisins. Du côté de la famille, j'ai quelques oncles et tantes en région parisienne, à Rennes et à Lyon. Cependant, ce ne sont pas des oncles directs, mais plutôt des parents éloignés."
        },
        {
            "id": "vie_privee__Q8",
            "question": "Quelle langue utilisez-vous au travail et dans la vie de tous les jours ?",
            "answer": "Le Français au quotidien. Mais il m’arrive d’échanger en anglais lorsqu’on échange avec des collègues qui sont à l’étranger dans des pays non Francophone, comme les USA, GB."
        },
        {
            "id": "vie_privee__Q9",
            "question": "Êtes-vous membre d'une association ? Si oui, laquelle et depuis quand ?",
            "answer": "Non. Meme si j'interviens pour donner des cours aux étudiants défavorisés en Afrique, a travers une association Africa Techup Tour."
        },
        {
            "id": "vie_privee__Q10",
            "question": "Pratiquez-vous une religion ?",
            "answer": "Oui je suis musulman."
        },
        {
            "id": "vie_privee__Q11",
            "question": "Quels sont vos loisirs ?",
            "answer": "Je pratiquais la boxe avec des collègues, du football avec d’anciens camarades d’école qui habitent en région parisienne. Ensuite, je consacre du temps à la lecture, et je regarde beaucoup de dessins animés pour me détendre."
        },
        {
            "id": "vie_privee__Q12",
            "question": "Pourquoi êtes-vous venu en France la toute première fois ?",
            "answer": "Pour les études initialement, puis je suis resté pour le travail quand des opportunités se sont presentées."
        },
        {
            "id": "vie_privee__Q14",
            "question": "Qu'avez-vous trouvé en France que vous n'avez pas dans votre pays d'origine ?",
            "answer": "La qualité de l’instruction notamment sur des domaines de pointe comme l’IA, la stabilité politique et économique permettant de se réaliser professionnellement. Il ya également des aspects concernant la valorisation du patrimoine culturel à travers des monuments et des places emblematiques qui permettent d'assouvir la soif de découverte."
        },
        {
            "id": "vie_privee__Q15",
            "question": "Où avez-vous appris le Français ?",
            "answer": "A l'école, puis à travers mes lectures dans mon pays d'origine"
        },
        {
            "id": "vie_privee__Q16",
            "question": "Pendant combien de temps avez-vous étudié le français ?",
            "answer": "Depuis 1999."
        },
        {
            "id": "vie_privee__Q17",
            "question": "Utilisez-vous la langue française au travail ?",
            "answer": "Oui la plupart du temps. Nénamoins nous avons des collègues qui sont un peu partout dans le monde, notamment en Amérique du Nord ou en Grande Bretagne. Lorsque je suis amené à échanger avec eux nous utilisons plutot l'Anglais."
        },
        {
            "id": "vie_privee__Q18",
            "question": "Parlez-vous d'autres langues ? Si oui, lesquelles ?",
            "answer": "L’anglais du fait de mon domaine. Le Hausa qui est ma langue maternelle et qui doit être dans le top 3 des langues africaines"
        },
        {
            "id": "vie_privee__Q19",
            "question": "Quelle langue vous paraît la plus facile ? Pourquoi ?",
            "answer": "Le Français car c’est la langue que j’utilise tous les jours, au travail, avec les amis, dans mes lectures, les films ou documentaires que je regarde, cette langue est omniprésente."
        },
        {
            "id": "vie_privee__Q20",
            "question": "Avez-vous de la famille proche ou lointaine dans votre pays d'origine ? Si oui, comptez-vous les faire venir en France ?",
            "answer": "Mon père est décédé, mais ma mère est toujours là-bas. J'ai aussi mes frères et sœurs qui vivent là-bas. Ils ont déjà leur travail et ont déjà construit leur vie familiale là-bas. Je n'ai aucune raison de les faire venir."
        },
        {
            "id": "vie_privee__Q21",
            "question": "Où passez-vous vos vacances ?",
            "answer": "Essentiellement en France. J’ai fait Marseille, Nice, Cannes et Grenoble."
        },
        {
            "id": "vie_privee__Q22",
            "question": "Quelles sont les nationalités des personnes de votre entourage ?",
            "answer": "L'essentiel des personnes que je côtoie aujourd'hui sont françaises, qu'il s'agisse de mes amis d'école, de mes collègues ou de mes voisins. Néanmoins, j'ai quand même des amis de différentes nationalités que j'ai rencontrés à l'école, notamment des amis avec qui j'ai étudié au Sénégal, car il s'agissait d'une école régionale."
        }
    ],
    "europe": [
        {
            "id": "europe__Q1",
            "question": "Quelle est la monnaie actuelle de la France ?",
            "answer": "C'est l'euro."
        },
        {
            "id": "europe__Q2",
            "question": "Quelle est la devise de l'Union européenne ?",
            "answer": "Unis dans la diversité."
        },
        {
            "id": "europe__Q3",
            "question": "Connaissez-vous l'hymne de l'Union européenne ?",
            "answer": "C'est l'ode à la joie de Beethoven."
        },
        {
            "id": "europe__Q4",
            "question": "Combien de pays compte l'Union européenne ?",
            "answer": "En 2024, l'Union européenne compte 27 États membres. Le Royaume-Uni a quitté l'Union européenne en 2020 durant ce que l'on appelle le Brexit."
        },
        {
            "id": "europe__Q5",
            "question": "Dans quel intérêt les pays européens rejoignent-ils l'Union européenne ?",
            "answer": "La liberté de circuler dans l'espace Schengen. La monnaie unique et forte l'euro, l'union politique et financière, le partage des valeurs démocratiques."
        },
        {
            "id": "europe__Q6",
            "question": "Où se trouve le siège du Parlement européen ?",
            "answer": "Il se trouve à Strasbourg en France."
        },
        {
            "id": "europe__Q7",
            "question": "Où se trouve le siège de la Commission européenne ?",
            "answer": "Il se trouve à Bruxelles en Belgique."
        },
        {
            "id": "europe__Q8",
            "question": "Quel pays détient la présidence de l'Union européenne ?",
            "answer": "En mars, 2024, c'est la Belgique."
        },
        {
            "id": "europe__Q9",
            "question": "Combien d'étoiles le drapeau européen comporte-t-il ?",
            "answer": "Il comporte 12 étoiles disposées en cercles."
        },
        {
            "id": "europe__Q10",
            "question": "Que symbolisent ces étoiles ?",
            "answer": "Elles symbolisent les idéaux d'unité, de solidarité et d'harmonie entre les peuples européens."
        },
        {
            "id": "europe__Q11",
            "question": "Que représente la journée du 9 mai ?",
            "answer": "C'est la journée de l'Europe qui représente le jour de la paix."
        },
        {
            "id": "europe__Q12",
            "question": "Quels sont les symboles de l'Union européenne ?",
            "answer": "L'Union européenne a plusieurs symboles. On pourra citer par exemple la monnaie européenne c'est-à-dire l'euro, le drapeau européen, la devise de l'Europe, l'hymne européen, la journée de l'Europe, c'est-à-dire le 9 mai."
        },
        {
            "id": "europe__Q13",
            "question": "Que connaissez-vous sur le traité de Rome ? Et quand a-t-il eu lieu ?",
            "answer": "Le 25 mars 1957, l'Allemagne, la Belgique, la France, l'Italie, le Luxembourg et les Pays-Bas signent à Rome deux traités. Le premier, crée la Communauté économique européenne, CEE. Le second, crée la Communauté européenne de l'énergie atomique, CEEA ou Euratome."
        },
        {
            "id": "europe__Q14",
            "question": "Qui est Jeanne d'Arc ?",
            "answer": "C'est une jeune paysanne française qui a conduit les troupes françaises à la libération d'une partie du territoire français durant la guerre des cent ans."
        },
        {
            "id": "europe__Q15",
            "question": "Qu'est-ce que la loi Veil ?",
            "answer": "C'est la loi qui encadre l'interruption volontaire de grossesse, préparée par la ministre de l'époque Simone Veil et votée le 17 janvier 1975."
        },
        {
            "id": "europe__Q16",
            "question": "Que pensez-vous de la loi Veil ?",
            "answer": "C'est une mesure importante qui garantit aux femmes le droit à la liberté de disposer de son corps."
        },
        {
            "id": "europe__Q17",
            "question": "Que pensez-vous de la parité hommes-femmes ?",
            "answer": "Je pense que les femmes et les hommes sont égaux et donc ils doivent avoir les mêmes droits et les mêmes obligations. En France, cette parité est garantie par l'article premier de la Constitution."
        },
        {
            "id": "europe__Q18",
            "question": "Avons-nous atteint cette parité dans tous les domaines ?",
            "answer": "Non, pas dans tous les domaines. Par exemple, aujourd'hui, pour l'égalité des salaires, il faudra au moins 200 ans pour l'atteindre de façon générale."
        },
        {
            "id": "europe__Q19",
            "question": "Quelles seront les prochaines élections ?",
            "answer": "Les prochaines élections en France seront les élections européennes. Elles auront lieu les 8 et 9 juin 2024."
        },
        {
            "id": "europe__Q20",
            "question": "Qui décidera de vous octroyer ou non la nationalité française ?",
            "answer": "C'est monsieur le ministre de l'Intérieur. Aujourd'hui, le ministre de l'Intérieur est monsieur Gérald Darmanin."
        },
        {
            "id": "europe__Q21",
            "question": "Quel ministre gère les relations entre l'État et les institutions religieuses ?",
            "answer": "C'est le ministère du culte, charge du ministre de l'Intérieur."
        },
        {
            "id": "europe__Q22",
            "question": "Qu'est-ce que la discrimination pour vous ?",
            "answer": "La discrimination, c'est par exemple de ne pas recruter quelqu'un à cause de son origine ou de son appartenance à une ethnie ou une religion ou même de son sexe. Le seul et unique critère d'embauche doit être la compétence."
        },
        {
            "id": "europe__Q23",
            "question": "La discrimination est-elle légale en France ?",
            "answer": "Non, pas du tout. C'est un délit passible de graves et lourdes sanctions judiciaires."
        },
        {
            "id": "europe__Q24",
            "question": "En quelle année les citoyens français sont-ils devenus européens ?",
            "answer": "Les citoyens français sont européens depuis 1992."
        },
        {
            "id": "europe__Q25",
            "question": "Qui a le droit d'accéder à l'emploi public ?",
            "answer": "Tous les citoyens ont le droit d'accéder aux emplois publics."
        },
        {
            "id": "europe__Q26",
            "question": "En cas de conflit armé qui pourra être appelé à défendre la patrie.",
            "answer": "En cas de conflit armé, tout citoyen de plus de 16 ans pourra être appelé à défendre la patrie."
        },
        {
            "id": "europe__Q27",
            "question": "Qu'est-ce que le système de sécurité sociale ?",
            "answer": "Le système de sécurité sociale se compose d'un ensemble d'institutions qui ont pour fonction de protéger les individus des conséquences de divers événements ou situations, généralement qualifiées de risques sociaux."
        },
        {
            "id": "europe__Q28",
            "question": "Par qui est-il financé ?",
            "answer": "Il est financé par les entreprises et les gens qui travaillent. C'est une application de la fraternité."
        },
        {
            "id": "europe__Q29",
            "question": "Qui finance les services publics ?",
            "answer": "Ce sont les gens qui travaillent à travers les impôts."
        },
        {
            "id": "europe__Q30",
            "question": "Êtes-vous obligés de payer vos impôts ?",
            "answer": "Payer ses impôts est obligatoire."
        },
        {
            "id": "europe__Q31",
            "question": "Si vous obtenez la nationalité française, comptez-vous vivre en France ?",
            "answer": "Vous obtenez la nationalité française pour vivre principalement en France."
        },
        {
            "id": "europe__Q32",
            "question": "Les citoyens sont-ils toujours satisfaits des choix du gouvernement ?",
            "answer": "Non, les citoyens ne sont pas toujours d'accord avec les décisions du gouvernement."
        },
        {
            "id": "europe__Q33",
            "question": "Comment manifestent-ils leurs désaccords ?",
            "answer": "Ils manifestent leurs désaccords en organisant des manifestations, ou en faisant grève, ou en utilisant toute autre méthode pacifique et en accord avec la loi."
        },
        {
            "id": "europe__Q34",
            "question": "Citez des femmes politiques que vous connaissez",
            "answer": "Simone Veil, Ségolène Royal, Elisabeth Borne, Rachida Dati, Anne Hidalgo, Valérie Pécresse"
        }
    ],
    "histoire": [
        {
            "id": "histoire__Q1",
            "question": "Citez trois rois de France.",
            "answer": "On citera par exemple le roi Charlemagne, François Ier, Henri IV et Louis XVI."
        },
        {
            "id": "histoire__Q2",
            "question": "Citez des reines de France.",
            "answer": "On citera par exemple Catherine de Médicis, Aliénor d'Aquitaine, Marie-Antoinette et Anne d'Autriche."
        },
        {
            "id": "histoire__Q3",
            "question": "En quoi et pourquoi Louis XIV est-il le plus connu ?",
            "answer": "Louis XIV est le roi de France le plus connu. Il est connu principalement pour la durée de son règne qui fut sans nul doute la plus longue de l'histoire de France. Il est aussi le symbole de la monarchie absolue, une sorte de dictature monarchique qui a été plus tard combattue par la Révolution française puis abandonnée après la victoire du peuple."
        },
        {
            "id": "histoire__Q4",
            "question": "Qui a été le roi de France durant la Révolution française ?",
            "answer": "C'était le roi Louis XVI, contre qui le peuple s'est révolté en refusant le pouvoir du roi et en proclamant la République. La famille royale est emprisonnée. Le roi est jugé et condamné à mort car les révolutionnaires veulent empêcher le retour de la royauté. Louis XVI fut guillotiné le 21 janvier 1793."
        },
        {
            "id": "histoire__Q5",
            "question": "A quelle date précise a eu lieu la Révolution française ?",
            "answer": "La Révolution française a eu lieu le 5 mai 1789 avec l'ouverture des États généraux et s'est terminée le 9 novembre 1799 avec le coup d'État du 18 brumaire de Napoléon Bonaparte."
        },
        {
            "id": "histoire__Q6",
            "question": "Quel événement de la Révolution vous a-t-il le plus marqué ?",
            "answer": "Parlez de la Révolution française. Citez par exemple un événement important de la Révolution qui s'est produite le 14 juillet 1789 et qui a marqué la prise de la prison de la Bastille, un événement inaugural du début de la Révolution. Elle a eu lieu suite à une crise agricole qui a donné lieu à une grande crise économique et une inflation importante qui se confrontait à des décisions de hausse, des impôts décidés par le roi de l'époque Louis XVI."
        },
        {
            "id": "histoire__Q7",
            "question": "Quel événement historique de la France vous a-t-il le plus marqué ?",
            "answer": "Vous pouvez citer n'importe quel événement, sportif, culturel, historique, la seule contrainte, c'est de devoir justifier votre choix."
        },
        {
            "id": "histoire__Q8",
            "question": "Quel a été le rôle de la Bastille avant sa démolition ?",
            "answer": "La Bastille servait de prison d'État dans laquelle ont été emprisonnés plusieurs célébrités de l'époque tels que Voltaire et Sade."
        },
        {
            "id": "histoire__Q9",
            "question": "Quand est-ce qu'a été adoptée la Déclaration des droits de l'homme et du citoyen ?",
            "answer": "Elle a été adoptée le 26 août 1789. Gardez à l'esprit que ceci est l'une des questions les plus fréquentes lors de l'entretien de naturalisation française par décret."
        },
        {
            "id": "histoire__Q10",
            "question": "Qui a instauré le Code civil en France ?",
            "answer": "Le Code civil en France a été instauré par Napoléon Bonaparte."
        },
        {
            "id": "histoire__Q11",
            "question": "Quelles sont les dates des deux dernières guerres mondiales ?",
            "answer": "La Première Guerre Mondiale a eu lieu du 28 juillet 1914 au 11 novembre 1918 connu sous le nom de la guerre 14-18. La Deuxième Guerre Mondiale a eu lieu du 1er septembre 1939 au 2 septembre 1945."
        },
        {
            "id": "histoire__Q12",
            "question": "Qui est Charles de Gaulle ?",
            "answer": "Le général de Gaulle est un militaire, un résistant et un homme politique français. Il est le fondateur de la 5e République et l'un des principaux architectes de la résistance française. Il a été président de la République française sous la 5e République de 1959 à 1969."
        },
        {
            "id": "histoire__Q13",
            "question": "Citer des monuments historiques français que vous connaissez ?",
            "answer": "Vous pouvez citer tous les monuments que vous connaissez à savoir : La tour Eiffel, L'Arc de Triomphe, Le château de Versailles, Le château de Vincennes, Le Louvre, Le château de la Loire, Le château de Chambord, Le pont du Gard"
        },
        {
            "id": "histoire__Q14",
            "question": "Quand est-ce qu'a été institué la 5e République ?",
            "answer": "La 5e République a été instituée par la constitution du 4 octobre 1958."
        },
        {
            "id": "histoire__Q15",
            "question": "Quel a été le fait marquant de la 5e République ?",
            "answer": "Elle a marqué définitivement la séparation entre le pouvoir exécutif, législatif et judiciaire."
        },
        {
            "id": "histoire__Q16",
            "question": "Quand est-ce qu'a eu lieu la séparation de l'Église et de l'État ?",
            "answer": "Elle a eu lieu le 9 décembre 1905."
        },
        {
            "id": "histoire__Q17",
            "question": "Quel personnage de l'histoire de France vous ont le plus marqué et marqué l'histoire ?",
            "answer": "Vous pourrez citer Charles de Gaulle, Napoléon. C'est n'importe quel autre personnage important ayant marqué l'histoire de France."
        },
        {
            "id": "histoire__Q18",
            "question": "Pourquoi le 1er mai est-il férié ?",
            "answer": "Il est férié car nous fêtons la fête du travail."
        },
        {
            "id": "histoire__Q19",
            "question": "Pourquoi le 11 novembre est-il férié ?",
            "answer": "Le 11 novembre marque la fin de la première guerre mondiale. C'est ce qu'on appelle l'armistice signé en 1918."
        },
        {
            "id": "histoire__Q20",
            "question": "Que fêtons-nous le 14 juillet ?",
            "answer": "C'est la fête nationale en France. Le 14 juillet est généralement associé à la prise de la Bastille en 1789. C'est dans les faits le 14 juillet 1790, la fête de la fédération qui est officiellement commémorée en France depuis plus d'un siècle."
        },
        {
            "id": "histoire__Q21",
            "question": "A quelle époque ont été bâtis les cathédrales gothiques ?",
            "answer": "Elles ont été bâties au Moyen-Âge."
        },
        {
            "id": "histoire__Q22",
            "question": "Avez-vous mangé des spécialités locales lors de vos voyages en France ?",
            "answer": "Oui. Citez les plats locaux des endroits que vous avez visités."
        },
        {
            "id": "histoire__Q23",
            "question": "Quels sont les plats typiques français que vous connaissez ?",
            "answer": "Citez certains plats français que vous connaissez comme la bouillabaisse, le pot au feu, la quiche lorraine, les galettes bretonnes, le riz, le riz de la fée, le steak tartar, l'aligo."
        },
        {
            "id": "histoire__Q24",
            "question": "Citez des personnages littéraires français célèbres.",
            "answer": "Vous pouvez par exemple citer Victor Hugo, Albert Camus et Alexandre Dumas."
        },
        {
            "id": "histoire__Q25",
            "question": "Citez des peintres français célèbres.",
            "answer": "Cézanne, Delacroix, Monet."
        },
        {
            "id": "histoire__Q26",
            "question": "Citez des personnes naturalisées.",
            "answer": "Marie Curie, Joséphine Becker. Attention! Ici on cherche des personnes naturalisées et non des personnes d'origine étrangère. Ainsi Zinedine Zidane ou Jamel Debouze ne sont pas des personnes naturalisées."
        },
        {
            "id": "histoire__Q27",
            "question": "Citez des artistes français connus.",
            "answer": "Berlioz, Joe Dassin, Charles Aznavour, Gustave Eiffel."
        },
        {
            "id": "histoire__Q28",
            "question": "Citez des écrivains français célèbres.",
            "answer": "Beaumarchais, Molière, Victor Hugo."
        },
        {
            "id": "histoire__Q29",
            "question": "Citez des œuvres littéraires célèbres.",
            "answer": "Notre-Dame de Paris, Le Malade Imaginaire. Le mariage de Figaro."
        },
        {
            "id": "histoire__Q30",
            "question": "Qui a écrit les Trois Mousquetaires ?",
            "answer": "Alexandre Dumas et Auguste Maquet."
        },
        {
            "id": "histoire__Q31",
            "question": "Qui était Voltaire ?",
            "answer": "De son vrai nom, François-Marie Arweb, Voltaire est un écrivain et philosophe français du XVIIIe siècle."
        },
        {
            "id": "histoire__Q32",
            "question": "À quel mouvement Voltaire appartient-il ?",
            "answer": "Il appartenait au mouvement de la philosophie des Lumières et il en est l'un des représentants les plus connus."
        },
        {
            "id": "histoire__Q33",
            "question": "Quel grand événement sportif français connaissez-vous ?",
            "answer": "Vous pouvez citer une épreuve cycliste comme le Tour de France, une épreuve de tennis comme le tournoi de Roland Garros, une course comme le marathon de Paris."
        },
        {
            "id": "histoire__Q34",
            "question": "Avons-nous le droit en France de porter des signes religieux dans l'espace public ?",
            "answer": "Oui, mais pas dans les écoles, les collèges et les lycées publics."
        },
        {
            "id": "histoire__Q35",
            "question": "Qu'est-ce que la loi de 2004 ?",
            "answer": "La loi de 2004 et plus précisément l'article L141.5.1 stipule que dans les écoles, les collèges et les lycées publics, le port de signes ou tenue par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit."
        },
        {
            "id": "histoire__Q36",
            "question": "Connaissez-vous Brigitte Bardot ?",
            "answer": "Brigitte Bardot est une actrice de cinéma, chanteuse et militante pour la cause animale. Elle a plusieurs œuvres artistiques et culturelles à son actif dont les plus connus sont « Moi je joue » et « Harley Davidson »."
        },
        {
            "id": "histoire__Q37",
            "question": "Citez des philosophes connus des Lumières ?",
            "answer": "Montesquieu, Voltaire, Diderot, Rousseau, Spinoza, Descartes."
        },
        {
            "id": "histoire__Q38",
            "question": "Qu'est-ce que la philosophie des Lumières ?",
            "answer": "C'est un mouvement culturel, philosophique, littéraire et intellectuel qui émerge dans la seconde moitié du XVIIe siècle avec plusieurs philosophes comme Voltaire et Rousseau et qui, par leur engagement contre les oppressions religieuses et politiques, se voyait comme une élite avancée œuvrant pour un progrès du monde. Combatant l'irrationnel, l'arbitraire, l'obscurantisme et la superstition des siècles passés, ils ont procédé au renouvellement du savoir, de l'éthique et de l'esthétique de leur temps. L'influence de leurs écrits a été déterminante dans les grands événements de la fin du XVIIIe siècle que sont la Déclaration d'indépendance des États-Unis et la Révolution française."
        },
        {
            "id": "histoire__Q39",
            "question": "Connaissez-vous des sportifs français ?",
            "answer": "Dans le football, Michel Platini, Zindine Zidane. Dans le cyclisme, Richard Virenck. Dans le tennis, Joe Wilfrid Tesonga, Gaëlle Monfils, Yannick Noah. Dans le judo, Teddy Riner."
        },
        {
            "id": "histoire__Q40",
            "question": "Citez des plats de votre région, ville, département.",
            "answer": "Ici, vous devez montrer lors de votre entretien de naturalisation française que vous êtes intégré et que vous connaissez à minima un ou deux plats typiques de votre région, ville, département. Vous devrez donc en fonction des questions adapter vos réponses."
        },
        {
            "id": "histoire__Q41",
            "question": "En quelle année a été abolie l'esclavage en France ?",
            "answer": "En France, l'esclavage a été abolie le 27 avril 1848."
        },
        {
            "id": "histoire__Q42",
            "question": "L'école est-elle obligatoire en France ?",
            "answer": "L'instruction est gratuite et obligatoire pour tous les enfants, français et étrangers, à partir de l'âge de 3 ans et jusqu'à l'âge de 16 ans révolus. L'âge minimum a été abaissé de 6 ans à 3 ans depuis 2019."
        },
        {
            "id": "histoire__Q43",
            "question": "Depuis quand l'école est-elle obligatoire en France ?",
            "answer": "L'instruction est obligatoire depuis le 28 mars 1882."
        },
        {
            "id": "histoire__Q44",
            "question": "Qui a rendu l'école obligatoire en France ?",
            "answer": "C'est l'ancien maire de Paris, Jules Ferry."
        },
        {
            "id": "histoire__Q45",
            "question": "Les femmes ont-elles le droit de vote en France ?",
            "answer": "Oui."
        },
        {
            "id": "histoire__Q46",
            "question": "Depuis quand les femmes ont-elles le droit de vote en France ?",
            "answer": "Depuis le 21 avril 1944."
        },
        {
            "id": "histoire__Q47",
            "question": "Qui a été à l'origine du château de Versailles ?",
            "answer": "C'est Louis XIV."
        },
        {
            "id": "histoire__Q48",
            "question": "Qui a été à l'origine de l'Arc de Triomphe ?",
            "answer": "C'est Napoléon Ier."
        },
        {
            "id": "histoire__Q49",
            "question": "Quel est le monument principal en France ?",
            "answer": "C'est la tour Eiffel à Paris."
        },
        {
            "id": "histoire__Q50",
            "question": "Qui a construit la tour Eiffel ?",
            "answer": "C'est Gustave Eiffel."
        },
        {
            "id": "histoire__Q51",
            "question": "Quand la tour Eiffel a été construite et à quel événement ?",
            "answer": "En 1889, lors de l'Exposition universelle de Paris."
        },
        {
            "id": "histoire__Q52",
            "question": "Citer des animateurs de télévision français que vous connaissez.",
            "answer": "Vous pouvez citer Christophe de Chavanne, Vincent Lagaffe, Jean-Pierre Foucault."
        },
        {
            "id": "histoire__Q53",
            "question": "Citer des chanteurs français connus.",
            "answer": "Dalida, Johnny Haliday, Charles Aznavour, Georges Brassan, Claude François."
        },
        {
            "id": "histoire__Q54",
            "question": "Citer des journalistes français connus.",
            "answer": "Gilles Bouleau, Anne Sophie Lapix, Anne Claire Coudray, Edwi Plenel, Yann Barthès."
        },
        {
            "id": "histoire__Q55",
            "question": "Citer des acteurs-actrices français que vous connaissez.",
            "answer": "Jean Dujardin, Gérard Depardieu, Marion Cotillard."
        },
        {
            "id": "histoire__Q56",
            "question": "Citer des anciennes colonies françaises.",
            "answer": "Algérie, Sénégal, Mali, Côte d'Ivoire."
        },
        {
            "id": "histoire__Q57",
            "question": "Qu'est-ce que la guerre de cent ans ?",
            "answer": "C'est une guerre résultant d'un conflit entre les rois de France et les rois d'Angleterre durant le Moyen-Âge. Ce conflit d'un siècle a en réalité duré 116 ans plus exactement."
        },
        {
            "id": "histoire__Q58",
            "question": "Connaissez-vous la bataille de Verdun ?",
            "answer": "La bataille de Verdun a eu lieu en 1916 entre l'armée française et l'armée allemande à la Lorraine pendant la Première Guerre mondiale. Cette guerre a fait beaucoup de victimes chez les deux camps sans pour autant sortir un vainqueur."
        },
        {
            "id": "histoire__Q59",
            "question": "Quel était le surnom des soldats français durant la Première Guerre mondiale ?",
            "answer": "On les appelait les Poilus."
        },
        {
            "id": "histoire__Q60",
            "question": "Quand a eu lieu la Première Guerre mondiale ?",
            "answer": "La Première Guerre mondiale a eu lieu du 28 juillet 1914 au 11 novembre 1918."
        },
        {
            "id": "histoire__Q61",
            "question": "Quand a eu lieu la Seconde Guerre mondiale ?",
            "answer": "La Seconde Guerre mondiale a eu lieu du 1er septembre 1939 au 2 septembre 1945."
        },
        {
            "id": "histoire__Q62",
            "question": "Qui sont les alliés durant la Première Guerre mondiale ?",
            "answer": "Les alliés sont la France, l'Angleterre, la Russie et les USA, c'est-à-dire les États-Unis d'Amérique."
        },
        {
            "id": "histoire__Q63",
            "question": "Qui sont les alliés durant la Seconde Guerre mondiale ?",
            "answer": "La France, l'Angleterre, l'URSS, c'est-à-dire l'Union soviétique, les USA, c'est-à-dire États-Unis d'Amérique."
        },
        {
            "id": "histoire__Q64",
            "question": "Quand a eu lieu le débarquement des alliés durant la Seconde Guerre mondiale ?",
            "answer": "Le débarquement des alliés a eu lieu le 6 juin 1944"
        },
        {
            "id": "histoire__Q65",
            "question": "Où a eu lieu le débarquement des alliés durant la Seconde Guerre mondiale ?",
            "answer": "Il a eu lieu en Normandie."
        }
    ]
}

export default freestyleQuizData

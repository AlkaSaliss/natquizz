interface Choice {
    id: string
    text: string
}

interface Question {
    id: string
    text: string
    choices: Choice[]
    correctChoice: string,
    imageUrl?: string
}

interface ThemeQuiz {
    id: string
    title: string
    description: string
    imageUrl: string
    questions: Question[]
}

const quizzes: ThemeQuiz[] = [
    {
        "id": "Histoire",
        "title": "Histoire",
        "description": "Testez vos connaissances sur le thème: Histoire",
        "imageUrl": "https://picsum.photos/200/300",
        "questions": [
            {
                "id": "history-question1",
                "text": "Lequel de ces écrivains français à reçu un prix Nobel ?",
                "choices": [
                    {
                        "id": "history-question1-choice1",
                        "text": "Jean-Paul Sartre"
                    },
                    {
                        "id": "history-question1-choice2",
                        "text": "Victor Hugo"
                    },
                    {
                        "id": "history-question1-choice3",
                        "text": "Albert Camus"
                    },
                    {
                        "id": "history-question1-choice4",
                        "text": "Jean Rousseau"
                    }
                ],
                "correctChoice":  "history-question1-choice3"
            },
            {
                "id": "history-question2",
                "text": "Quelle date est célébrée la fête nationale ?",
                "choices": [
                    {
                        "id": "history-question2-choice1",
                        "text": "14 juillet"
                    },
                    {
                        "id": "history-question2-choice2",
                        "text": "15 août"
                    },
                    {
                        "id": "history-question2-choice3",
                        "text": "1er janvier"
                    },
                    {
                        "id": "history-question2-choice4",
                        "text": "1er mai"
                    }
                ],
                "correctChoice": "history-question2-choice1"
            },
            {
                "id": "history-question3",
                "text": "Qui a instauré le Code civil en France ?",
                "choices": [
                    {
                        "id": "history-question3-choice1",
                        "text": "Napoléon Bonaparte"
                    },
                    {
                        "id": "history-question3-choice2",
                        "text": "Louis XIV"
                    },
                    {
                        "id": "history-question3-choice3",
                        "text": "Charles de Gaulle"
                    },
                    {
                        "id": "history-question3-choice4",
                        "text": "François Ier"
                    }
                ],
                "correctChoice": "history-question3-choice1"
            },
            {
                "id": "history-question4",
                "text": "Quel événement de la Révolution française vous a le plus marqué ?",
                "choices": [
                    {
                        "id": "history-question4-choice1",
                        "text": "La prise de la Bastille"
                    },
                    {
                        "id": "history-question4-choice2",
                        "text": "La Declaration des Droits de l'Homme et du Citoyen"
                    },
                    {
                        "id": "history-question4-choice3",
                        "text": "La guillotine de Louis XVI"
                    },
                    {
                        "id": "history-question4-choice4",
                        "text": "L'abolition de la monarchie"
                    }
                ],
                "correctChoice": "history-question4-choice1"
            },
            {
                "id": "history-question5",
                "text": "Qui a été le roi de France durant la Révolution française ?",
                "choices": [
                    {
                        "id": "history-question5-choice1",
                        "text": "Louis XVI"
                    },
                    {
                        "id": "history-question5-choice2",
                        "text": "Napoleon Bonaparte"
                    },
                    {
                        "id": "history-question5-choice3",
                        "text": "François Ier"
                    },
                    {
                        "id": "history-question5-choice4",
                        "text": "Henri IV"
                    }
                ],
                "correctChoice": "history-question5-choice1"
            },
            {
                "id": "history-question6",
                "text": "Quand est-ce que la Déclaration des Droits de l'Homme et du Citoyen a été adoptée ?",
                "choices": [
                    {
                        "id": "history-question6-choice1",
                        "text": "26 août 1789"
                    },
                    {
                        "id": "history-question6-choice2",
                        "text": "5 mai 1789"
                    },
                    {
                        "id": "history-question6-choice3",
                        "text": "14 juillet 1790"
                    },
                    {
                        "id": "history-question6-choice4",
                        "text": "9 novembre 1799"
                    }
                ],
                "correctChoice": "history-question6-choice1"
            },
            {
                "id": "history-question7",
                "text": "Quels sont les dates des deux dernières guerres mondiales ?",
                "choices": [
                    {
                        "id": "history-question7-choice1",
                        "text": "Première Guerre Mondiale: 28 juillet 1914 - 11 novembre 1918, Deuxième Guerre Mondiale: 1er septembre 1939 - 2 septembre 1945"
                    },
                    {
                        "id": "history-question7-choice2",
                        "text": "Première Guerre Mondiale: 1er août 1914 - 11 novembre 1918, Deuxième Guerre Mondiale: 3 septembre 1939 - 8 mai 1945"
                    },
                    {
                        "id": "history-question7-choice3",
                        "text": "Première Guerre Mondiale: 28 juin 1914 - 11 novembre 1918, Deuxième Guerre Mondiale: 1er septembre 1939 - 9 mai 1945"
                    },
                    {
                        "id": "history-question7-choice4",
                        "text": "Première Guerre Mondiale: 28 juillet 1914 - 14 novembre 1918, Deuxième Guerre Mondiale: 1er septembre 1939 - 6 juin 1944"
                    }
                ],
                "correctChoice": "history-question7-choice1"
            },
            {
                "id": "history-question8",
                "text": "Quand la 5e République a-t-elle été instituée ?",
                "choices": [
                    {
                        "id": "history-question8-choice1",
                        "text": "4 octobre 1958"
                    },
                    {
                        "id": "history-question8-choice2",
                        "text": "28 mars 1882"
                    },
                    {
                        "id": "history-question8-choice3",
                        "text": "9 décembre 1905"
                    },
                    {
                        "id": "history-question8-choice4",
                        "text": "21 avril 1929"
                    }
                ],
                "correctChoice": "history-question8-choice1"
            },
            {
                "id": "history-question9",
                "text": "Quand l'esclavage a-t-il été aboli en France ?",
                "choices": [
                    {
                        "id": "history-question9-choice1",
                        "text": "27 avril 1848"
                    },
                    {
                        "id": "history-question9-choice2",
                        "text": "14 juillet 1789"
                    },
                    {
                        "id": "history-question9-choice3",
                        "text": "5 mai 1789"
                    },
                    {
                        "id": "history-question9-choice4",
                        "text": "11 novembre 1918"
                    }
                ],
                "correctChoice": "history-question9-choice1"
            },
            {
                "id": "history-question10",
                "text": "Depuis quand l'école est-elle obligatoire en France ?",
                "choices": [
                    {
                        "id": "history-question10-choice1",
                        "text": "28 mars 1882"
                    },
                    {
                        "id": "history-question10-choice2",
                        "text": "1er janvier 1900"
                    },
                    {
                        "id": "history-question10-choice3",
                        "text": "1er septembre 1939"
                    },
                    {
                        "id": "history-question10-choice4",
                        "text": "1er janvier 1970"
                    }
                ],
                "correctChoice": "history-question10-choice1"
            },
            {
                "id": "history-question11",
                "text": "Qui a rendu l'école obligatoire en France ?",
                "choices": [
                    {
                        "id": "history-question11-choice1",
                        "text": "Jules Ferry"
                    },
                    {
                        "id": "history-question11-choice2",
                        "text": "Napoléon Bonaparte"
                    },
                    {
                        "id": "history-question11-choice3",
                        "text": "Charles de Gaulle"
                    },
                    {
                        "id": "history-question11-choice4",
                        "text": "Louis XIV"
                    }
                ],
                "correctChoice": "history-question11-choice1"
            },
            {
                "id": "history-question12",
                "text": "Depuis quand les femmes ont-elles le droit de vote en France ?",
                "choices": [
                    {
                        "id": "history-question12-choice1",
                        "text": "21 avril 1944"
                    },
                    {
                        "id": "history-question12-choice2",
                        "text": "14 juillet 1789"
                    },
                    {
                        "id": "history-question12-choice3",
                        "text": "28 mars 1882"
                    },
                    {
                        "id": "history-question12-choice4",
                        "text": "1er janvier 1900"
                    }
                ],
                "correctChoice": "history-question12-choice1"
            },
            {
                "id": "history-question13",
                "text": "Qui a construit la tour Eiffel ?",
                "choices": [
                    {
                        "id": "history-question13-choice1",
                        "text": "Gustave Eiffel"
                    },
                    {
                        "id": "history-question13-choice2",
                        "text": "Napoléon Ier"
                    },
                    {
                        "id": "history-question13-choice3",
                        "text": "Louis XIV"
                    },
                    {
                        "id": "history-question13-choice4",
                        "text": "Jules Ferry"
                    }
                ],
                "correctChoice": "history-question13-choice1"
            },
            {
                "id": "history-question14",
                "text": "Quand a été construite la tour Eiffel et à quel événement ?",
                "choices": [
                    {
                        "id": "history-question14-choice1",
                        "text": "En 1889, lors de l'Exposition universelle de Paris"
                    },
                    {
                        "id": "history-question14-choice2",
                        "text": "En 1900, lors des Jeux Olympiques de Paris"
                    },
                    {
                        "id": "history-question14-choice3",
                        "text": "En 1925, lors de l'Exposition internationale des Arts Décoratifs"
                    },
                    {
                        "id": "history-question14-choice4",
                        "text": "En 1939, lors de l'Exposition internationale"
                    }
                ],
                "correctChoice": "history-question14-choice1"
            },
            {
                "id": "history-question15",
                "text": "Qu'est-ce que la guerre de Cent Ans ?",
                "choices": [
                    {
                        "id": "history-question15-choice1",
                        "text": "Une guerre résultant d'un conflit entre les rois de France et les rois d'Angleterre durant le Moyen-Âge"
                    },
                    {
                        "id": "history-question15-choice2",
                        "text": "Une guerre entre la France et l'Allemagne au 20ème siècle"
                    },
                    {
                        "id": "history-question15-choice3",
                        "text": "Une guerre entre la France et l'Espagne au 16ème siècle"
                    },
                    {
                        "id": "history-question15-choice4",
                        "text": "Une guerre entre la France et l'Italie au 19ème siècle"
                    }
                ],
                "correctChoice": "history-question15-choice1"
            },
            {
                "id": "history-question16",
                "text": "Connaissez-vous la bataille de Verdun ?",
                "choices": [
                    {
                        "id": "history-question16-choice1",
                        "text": "Oui, la bataille de Verdun a eu lieu en 1916 entre l'armée française et l'armée allemande à la Lorraine pendant la Première Guerre mondiale"
                    },
                    {
                        "id": "history-question16-choice2",
                        "text": "Non, je ne connais pas cette bataille"
                    },
                    {
                        "id": "history-question16-choice3",
                        "text": "Oui, c'était une bataille de la Seconde Guerre mondiale"
                    },
                    {
                        "id": "history-question16-choice4",
                        "text": "Oui, c'était une bataille de la guerre franco-prussienne de 1870"
                    }
                ],
                "correctChoice": "history-question16-choice1"
            },
            {
                "id": "history-question17",
                "text": "Quel était le surnom des soldats français durant la Première Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question17-choice1",
                        "text": "Les Poilus"
                    },
                    {
                        "id": "history-question17-choice2",
                        "text": "Les Doughboys"
                    },
                    {
                        "id": "history-question17-choice3",
                        "text": "Les Tommies"
                    },
                    {
                        "id": "history-question17-choice4",
                        "text": "Les Pioupious"
                    }
                ],
                "correctChoice": "history-question17-choice1"
            },
            {
                "id": "history-question18",
                "text": "Qui sont les alliés de la France durant la Première Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question18-choice1",
                        "text": "La France, l'Angleterre, la Russie et les USA"
                    },
                    {
                        "id": "history-question18-choice2",
                        "text": "La France, l'Angleterre, l'Allemagne et l'Autriche-Hongrie"
                    },
                    {
                        "id": "history-question18-choice3",
                        "text": "La France, l'Espagne, l'Italie et le Japon"
                    },
                    {
                        "id": "history-question18-choice4",
                        "text": "La France, la Belgique, les Pays-Bas et le Luxembourg"
                    }
                ],
                "correctChoice": "history-question18-choice1"
            },
            {
                "id": "history-question19",
                "text": "Qui sont les alliés de la France durant la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question19-choice1",
                        "text": "La France, l'Angleterre, l'URSS, les USA"
                    },
                    {
                        "id": "history-question19-choice2",
                        "text": "La France, l'Allemagne, l'Italie, le Japon"
                    },
                    {
                        "id": "history-question19-choice3",
                        "text": "La France, l'Espagne, le Portugal, la Suisse"
                    },
                    {
                        "id": "history-question19-choice4",
                        "text": "La France, la Belgique, les Pays-Bas, le Luxembourg"
                    }
                ],
                "correctChoice": "history-question19-choice1"
            },
            {
                "id": "history-question20",
                "text": "Quand a eu lieu le débarquement des alliés durant la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question20-choice1",
                        "text": "Le 6 juin 1944"
                    },
                    {
                        "id": "history-question20-choice2",
                        "text": "Le 8 mai 1945"
                    },
                    {
                        "id": "history-question20-choice3",
                        "text": "Le 11 novembre 1918"
                    },
                    {
                        "id": "history-question20-choice4",
                        "text": "Le 1er septembre 1939"
                    }
                ],
                "correctChoice": "history-question20-choice1"
            },
            {
                "id": "history-question21",
                "text": "Où a eu lieu le débarquement des alliés durant la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question21-choice1",
                        "text": "En Normandie"
                    },
                    {
                        "id": "history-question21-choice2",
                        "text": "En Provence"
                    },
                    {
                        "id": "history-question21-choice3",
                        "text": "En Italie"
                    },
                    {
                        "id": "history-question21-choice4",
                        "text": "En Belgique"
                    }
                ],
                "correctChoice": "history-question21-choice1"
            },
            {
                "id": "history-question22",
                "text": "Qui a été à l'origine du château de Versailles ?",
                "choices": [
                    {
                        "id": "history-question22-choice1",
                        "text": "Louis XIV"
                    },
                    {
                        "id": "history-question22-choice2",
                        "text": "Napoléon Ier"
                    },
                    {
                        "id": "history-question22-choice3",
                        "text": "Charles de Gaulle"
                    },
                    {
                        "id": "history-question22-choice4",
                        "text": "Jules Ferry"
                    }
                ],
                "correctChoice": "history-question22-choice1"
            },
            {
                "id": "history-question23",
                "text": "Qui a été à l'origine de l'Arc de Triomphe ?",
                "choices": [
                    {
                        "id": "history-question23-choice1",
                        "text": "Napoléon Ier"
                    },
                    {
                        "id": "history-question23-choice2",
                        "text": "Louis XIV"
                    },
                    {
                        "id": "history-question23-choice3",
                        "text": "Charles de Gaulle"
                    },
                    {
                        "id": "history-question23-choice4",
                        "text": "Gustave Eiffel"
                    }
                ],
                "correctChoice": "history-question23-choice1"
            },
            {
                "id": "history-question24",
                "text": "Quel est le monument principal en France ?",
                "choices": [
                    {
                        "id": "history-question24-choice1",
                        "text": "La tour Eiffel"
                    },
                    {
                        "id": "history-question24-choice2",
                        "text": "Le Louvre"
                    },
                    {
                        "id": "history-question24-choice3",
                        "text": "Notre-Dame de Paris"
                    },
                    {
                        "id": "history-question24-choice4",
                        "text": "L'Arc de Triomphe"
                    }
                ],
                "correctChoice": "history-question24-choice1"
            },
            {
                "id": "history-question25",
                "text": "Qui est Voltaire ?",
                "choices": [
                    {
                        "id": "history-question25-choice1",
                        "text": "Un écrivain et philosophe français du XVIIIe siècle"
                    },
                    {
                        "id": "history-question25-choice2",
                        "text": "Un peintre impressionniste français"
                    },
                    {
                        "id": "history-question25-choice3",
                        "text": "Un homme politique français du XXe siècle"
                    },
                    {
                        "id": "history-question25-choice4",
                        "text": "Un mathématicien français du XVIIe siècle"
                    }
                ],
                "correctChoice": "history-question25-choice1"
            },
            {
                "id": "history-question26",
                "text": "À quel mouvement Voltaire appartient-il ?",
                "choices": [
                    {
                        "id": "history-question26-choice1",
                        "text": "Au mouvement de la philosophie des Lumières"
                    },
                    {
                        "id": "history-question26-choice2",
                        "text": "Au mouvement romantique"
                    },
                    {
                        "id": "history-question26-choice3",
                        "text": "Au mouvement existentialiste"
                    },
                    {
                        "id": "history-question26-choice4",
                        "text": "Au mouvement surréaliste"
                    }
                ],
                "correctChoice": "history-question26-choice1"
            },
            {
                "id": "history-question27",
                "text": "Que fêtons-nous le 14 juillet ?",
                "choices": [
                    {
                        "id": "history-question27-choice1",
                        "text": "La fête nationale"
                    },
                    {
                        "id": "history-question27-choice2",
                        "text": "La fête du travail"
                    },
                    {
                        "id": "history-question27-choice3",
                        "text": "L'armistice de la Première Guerre mondiale"
                    },
                    {
                        "id": "history-question27-choice4",
                        "text": "La fin de la Seconde Guerre mondiale"
                    }
                ],
                "correctChoice": "history-question27-choice1"
            },
            {
                "id": "history-question28",
                "text": "Pourquoi le 11 novembre est-il férié ?",
                "choices": [
                    {
                        "id": "history-question28-choice1",
                        "text": "Il marque la fin de la Première Guerre mondiale"
                    },
                    {
                        "id": "history-question28-choice2",
                        "text": "Il célèbre la fête nationale"
                    },
                    {
                        "id": "history-question28-choice3",
                        "text": "Il commémore la Révolution française"
                    },
                    {
                        "id": "history-question28-choice4",
                        "text": "Il honore les combattants de la Seconde Guerre mondiale"
                    }
                ],
                "correctChoice": "history-question28-choice1"
            },
            {
                "id": "history-question29",
                "text": "Pourquoi le 1er mai est-il férié ?",
                "choices": [
                    {
                        "id": "history-question29-choice1",
                        "text": "Nous fêtons la fête du travail"
                    },
                    {
                        "id": "history-question29-choice2",
                        "text": "C'est la fête nationale"
                    },
                    {
                        "id": "history-question29-choice3",
                        "text": "C'est la fin de la Seconde Guerre mondiale"
                    },
                    {
                        "id": "history-question29-choice4",
                        "text": "C'est la journée de la femme"
                    }
                ],
                "correctChoice": "history-question29-choice1"
            },
            {
                "id": "history-question30",
                "text": "À quelle époque ont été bâties les cathédrales gothiques ?",
                "choices": [
                    {
                        "id": "history-question30-choice1",
                        "text": "Au Moyen-Âge"
                    },
                    {
                        "id": "history-question30-choice2",
                        "text": "À la Renaissance"
                    },
                    {
                        "id": "history-question30-choice3",
                        "text": "À l'époque baroque"
                    },
                    {
                        "id": "history-question30-choice4",
                        "text": "À l'époque contemporaine"
                    }
                ],
                "correctChoice": "history-question30-choice1"
            },
            {
                "id": "history-question31",
                "text": "Qui a écrit Les Trois Mousquetaires ?",
                "choices": [
                    {
                        "id": "history-question31-choice1",
                        "text": "Alexandre Dumas et Auguste Maquet"
                    },
                    {
                        "id": "history-question31-choice2",
                        "text": "Victor Hugo"
                    },
                    {
                        "id": "history-question31-choice3",
                        "text": "Molière"
                    },
                    {
                        "id": "history-question31-choice4",
                        "text": "Voltaire"
                    }
                ],
                "correctChoice": "history-question31-choice1"
            },
            {
                "id": "history-question32",
                "text": "Qui sont des personnages littéraires français célèbres ?",
                "choices": [
                    {
                        "id": "history-question32-choice1",
                        "text": "Victor Hugo, Albert Camus, Alexandre Dumas"
                    },
                    {
                        "id": "history-question32-choice2",
                        "text": "Molière, Voltaire, Jean-Paul Sartre"
                    },
                    {
                        "id": "history-question32-choice3",
                        "text": "Honoré de Balzac, Emile Zola, Jules Verne"
                    },
                    {
                        "id": "history-question32-choice4",
                        "text": "Stendhal, Flaubert, Maupassant"
                    }
                ],
                "correctChoice": "history-question32-choice1"
            },
            {
                "id": "history-question33",
                "text": "Qui sont des peintres français célèbres ?",
                "choices": [
                    {
                        "id": "history-question33-choice1",
                        "text": "Cézanne, Delacroix, Monet"
                    },
                    {
                        "id": "history-question33-choice2",
                        "text": "Renoir, Toulouse-Lautrec, Matisse"
                    },
                    {
                        "id": "history-question33-choice3",
                        "text": "Degas, Manet, Seurat"
                    },
                    {
                        "id": "history-question33-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question33-choice4"
            },
            {
                "id": "history-question34",
                "text": "Qui sont des personnes naturalisées en France ?",
                "choices": [
                    {
                        "id": "history-question34-choice1",
                        "text": "Marie Curie, Joséphine Becker"
                    },
                    {
                        "id": "history-question34-choice2",
                        "text": "Zinedine Zidane, Jamel Debouze"
                    },
                    {
                        "id": "history-question34-choice3",
                        "text": "Yannick Noah, Teddy Riner"
                    },
                    {
                        "id": "history-question34-choice4",
                        "text": "Michel Platini, Richard Virenck"
                    }
                ],
                "correctChoice": "history-question34-choice1"
            },
            {
                "id": "history-question35",
                "text": "Qui sont des artistes français connus ?",
                "choices": [
                    {
                        "id": "history-question35-choice1",
                        "text": "Berlioz, Joe Dassin, Charles Aznavour, Gustave Eiffel"
                    },
                    {
                        "id": "history-question35-choice2",
                        "text": "Picasso, Dalí, Miró, Rodin"
                    },
                    {
                        "id": "history-question35-choice3",
                        "text": "Debussy, Ravel, Bizet, Offenbach"
                    },
                    {
                        "id": "history-question35-choice4",
                        "text": "Soulages, Boudin, Corot, Géricault"
                    }
                ],
                "correctChoice": "history-question35-choice1"
            },
            {
                "id": "history-question36",
                "text": "Qui sont des écrivains français célèbres ?",
                "choices": [
                    {
                        "id": "history-question36-choice1",
                        "text": "Beaumarchais, Molière, Victor Hugo"
                    },
                    {
                        "id": "history-question36-choice2",
                        "text": "Baudelaire, Rimbaud, Verlaine"
                    },
                    {
                        "id": "history-question36-choice3",
                        "text": "Proust, Gide, Sartre"
                    },
                    {
                        "id": "history-question36-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question36-choice4"
            },
            {
                "id": "history-question37",
                "text": "Quelles sont des œuvres littéraires françaises célèbres ?",
                "choices": [
                    {
                        "id": "history-question37-choice1",
                        "text": "Notre-Dame de Paris, Le Malade Imaginaire, Le Mariage de Figaro"
                    },
                    {
                        "id": "history-question37-choice2",
                        "text": "Les Misérables, Germinal, L'Étranger"
                    },
                    {
                        "id": "history-question37-choice3",
                        "text": "Madame Bovary, L'Assommoir, Bel-Ami"
                    },
                    {
                        "id": "history-question37-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question37-choice4"
            },
            {
                "id": "history-question38",
                "text": "Connaissez-vous Brigitte Bardot ?",
                "choices": [
                    {
                        "id": "history-question38-choice1",
                        "text": "Oui, Brigitte Bardot est une actrice de cinéma, chanteuse et militante pour la cause animale"
                    },
                    {
                        "id": "history-question38-choice2",
                        "text": "Non, je ne connais pas Brigitte Bardot"
                    },
                    {
                        "id": "history-question38-choice3",
                        "text": "Oui, c'est une femme politique française"
                    },
                    {
                        "id": "history-question38-choice4",
                        "text": "Oui, c'est une écrivaine française"
                    }
                ],
                "correctChoice": "history-question38-choice1"
            },
            {
                "id": "history-question39",
                "text": "Quels sont des philosophes français connus des Lumières ?",
                "choices": [
                    {
                        "id": "history-question39-choice1",
                        "text": "Montesquieu, Voltaire, Diderot, Rousseau, Spinoza, Descartes"
                    },
                    {
                        "id": "history-question39-choice2",
                        "text": "Sartre, Camus, Beauvoir, Foucault, Deleuze"
                    },
                    {
                        "id": "history-question39-choice3",
                        "text": "Comte, Durkheim, Bergson, Sartre"
                    },
                    {
                        "id": "history-question39-choice4",
                        "text": "Pascal, Descartes, Malebranche, Bossuet"
                    }
                ],
                "correctChoice": "history-question39-choice1"
            },
            {
                "id": "history-question40",
                "text": "Qu'est-ce que la philosophie des Lumières ?",
                "choices": [
                    {
                        "id": "history-question40-choice1",
                        "text": "C'est un mouvement culturel, philosophique, littéraire et intellectuel qui émerge dans la seconde moitié du XVIIe siècle avec plusieurs philosophes comme Voltaire et Rousseau"
                    },
                    {
                        "id": "history-question40-choice2",
                        "text": "C'est un mouvement artistique français du XIXe siècle"
                    },
                    {
                        "id": "history-question40-choice3",
                        "text": "C'est un mouvement politique et social du XXe siècle"
                    },
                    {
                        "id": "history-question40-choice4",
                        "text": "C'est un mouvement scientifique et technologique du XVIIIe siècle"
                    }
                ],
                "correctChoice": "history-question40-choice1"
            },
            {
                "id": "history-question41",
                "text": "Connaissez-vous des sportifs français ?",
                "choices": [
                    {
                        "id": "history-question41-choice1",
                        "text": "Michel Platini, Zinedine Zidane, Richard Virenck, Yannick Noah, Teddy Riner"
                    },
                    {
                        "id": "history-question41-choice2",
                        "text": "Lionel Messi, Cristiano Ronaldo, Neymar, Kylian Mbappé"
                    },
                    {
                        "id": "history-question41-choice3",
                        "text": "Usain Bolt, Michael Phelps, Muhammad Ali, Serena Williams"
                    },
                    {
                        "id": "history-question41-choice4",
                        "text": "Federer, Nadal, Djokovic, Murray"
                    }
                ],
                "correctChoice": "history-question41-choice1"
            },
            {
                "id": "history-question42",
                "text": "Est-ce que le port de signes religieux est autorisé dans l'espace public en France ?",
                "choices": [
                    {
                        "id": "history-question42-choice1",
                        "text": "Oui, mais pas dans les écoles, les collèges et les lycées publics"
                    },
                    {
                        "id": "history-question42-choice2",
                        "text": "Non, le port de signes religieux est totalement interdit dans l'espace public"
                    },
                    {
                        "id": "history-question42-choice3",
                        "text": "Oui, le port de signes religieux est autorisé partout"
                    },
                    {
                        "id": "history-question42-choice4",
                        "text": "Non, seuls certains signes religieux sont autorisés"
                    }
                ],
                "correctChoice": "history-question42-choice1"
            },
            {
                "id": "history-question43",
                "text": "Qu'est-ce que la loi de 2004 en France ?",
                "choices": [
                    {
                        "id": "history-question43-choice1",
                        "text": "La loi de 2004 stipule que dans les écoles, les collèges et les lycées publics, le port de signes ou tenue par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit"
                    },
                    {
                        "id": "history-question43-choice2",
                        "text": "La loi de 2004 a aboli l'esclavage en France"
                    },
                    {
                        "id": "history-question43-choice3",
                        "text": "La loi de 2004 a instauré l'obligation scolaire jusqu'à 16 ans"
                    },
                    {
                        "id": "history-question43-choice4",
                        "text": "La loi de 2004 a accordé le droit de vote aux femmes"
                    }
                ],
                "correctChoice": "history-question43-choice1"
            },
            {
                "id": "history-question44",
                "text": "Que fêtons-nous le 1er mai en France ?",
                "choices": [
                    {
                        "id": "history-question44-choice1",
                        "text": "La fête du travail"
                    },
                    {
                        "id": "history-question44-choice2",
                        "text": "La fête nationale"
                    },
                    {
                        "id": "history-question44-choice3",
                        "text": "L'armistice de la Première Guerre mondiale"
                    },
                    {
                        "id": "history-question44-choice4",
                        "text": "La journée de la femme"
                    }
                ],
                "correctChoice": "history-question44-choice1"
            },
            {
                "id": "history-question45",
                "text": "Quel grand événement sportif français connaissez-vous ?",
                "choices": [
                    {
                        "id": "history-question45-choice1",
                        "text": "Le Tour de France, Roland Garros, le Marathon de Paris"
                    },
                    {
                        "id": "history-question45-choice2",
                        "text": "La Coupe du Monde de football, les Jeux Olympiques"
                    },
                    {
                        "id": "history-question45-choice3",
                        "text": "Le Tournoi des Six Nations, les 24 Heures du Mans"
                    },
                    {
                        "id": "history-question45-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question45-choice4"
            },
            {
                "id": "history-question46",
                "text": "Qui est Charles de Gaulle ?",
                "choices": [
                    {
                        "id": "history-question46-choice1",
                        "text": "Un militaire, un résistant et un homme politique français, fondateur de la 5e République"
                    },
                    {
                        "id": "history-question46-choice2",
                        "text": "Un écrivain français du XIXe siècle"
                    },
                    {
                        "id": "history-question46-choice3",
                        "text": "Un peintre français impressionniste"
                    },
                    {
                        "id": "history-question46-choice4",
                        "text": "Un philosophe des Lumières"
                    }
                ],
                "correctChoice": "history-question46-choice1"
            },
            {
                "id": "history-question32",
                "text": "Qui sont des personnages littéraires français célèbres ?",
                "choices": [
                    {
                        "id": "history-question32-choice1",
                        "text": "Victor Hugo, Albert Camus, Alexandre Dumas"
                    },
                    {
                        "id": "history-question32-choice2",
                        "text": "Molière, Voltaire, Jean-Paul Sartre"
                    },
                    {
                        "id": "history-question32-choice3",
                        "text": "Honoré de Balzac, Emile Zola, Jules Verne"
                    },
                    {
                        "id": "history-question32-choice4",
                        "text": "Stendhal, Flaubert, Maupassant"
                    }
                ],
                "correctChoice": "history-question32-choice1"
            },
            {
                "id": "history-question33",
                "text": "Qui sont des peintres français célèbres ?",
                "choices": [
                    {
                        "id": "history-question33-choice1",
                        "text": "Cézanne, Delacroix, Monet"
                    },
                    {
                        "id": "history-question33-choice2",
                        "text": "Renoir, Toulouse-Lautrec, Matisse"
                    },
                    {
                        "id": "history-question33-choice3",
                        "text": "Degas, Manet, Seurat"
                    },
                    {
                        "id": "history-question33-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question33-choice4"
            },
            {
                "id": "history-question34",
                "text": "Qui sont des personnes naturalisées en France ?",
                "choices": [
                    {
                        "id": "history-question34-choice1",
                        "text": "Marie Curie, Joséphine Becker"
                    },
                    {
                        "id": "history-question34-choice2",
                        "text": "Zinedine Zidane, Jamel Debouze"
                    },
                    {
                        "id": "history-question34-choice3",
                        "text": "Yannick Noah, Teddy Riner"
                    },
                    {
                        "id": "history-question34-choice4",
                        "text": "Michel Platini, Richard Virenck"
                    }
                ],
                "correctChoice": "history-question34-choice1"
            },
            {
                "id": "history-question35",
                "text": "Qui sont des artistes français connus ?",
                "choices": [
                    {
                        "id": "history-question35-choice1",
                        "text": "Berlioz, Joe Dassin, Charles Aznavour, Gustave Eiffel"
                    },
                    {
                        "id": "history-question35-choice2",
                        "text": "Picasso, Dalí, Miró, Rodin"
                    },
                    {
                        "id": "history-question35-choice3",
                        "text": "Debussy, Ravel, Bizet, Offenbach"
                    },
                    {
                        "id": "history-question35-choice4",
                        "text": "Soulages, Boudin, Corot, Géricault"
                    }
                ],
                "correctChoice": "history-question35-choice1"
            },
            {
                "id": "history-question36",
                "text": "Qui sont des écrivains français célèbres ?",
                "choices": [
                    {
                        "id": "history-question36-choice1",
                        "text": "Beaumarchais, Molière, Victor Hugo"
                    },
                    {
                        "id": "history-question36-choice2",
                        "text": "Baudelaire, Rimbaud, Verlaine"
                    },
                    {
                        "id": "history-question36-choice3",
                        "text": "Proust, Gide, Sartre"
                    },
                    {
                        "id": "history-question36-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question36-choice4"
            },
            {
                "id": "history-question37",
                "text": "Quelles sont des œuvres littéraires françaises célèbres ?",
                "choices": [
                    {
                        "id": "history-question37-choice1",
                        "text": "Notre-Dame de Paris, Le Malade Imaginaire, Le Mariage de Figaro"
                    },
                    {
                        "id": "history-question37-choice2",
                        "text": "Les Misérables, Germinal, L'Étranger"
                    },
                    {
                        "id": "history-question37-choice3",
                        "text": "Madame Bovary, L'Assommoir, Bel-Ami"
                    },
                    {
                        "id": "history-question37-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question37-choice4"
            },
            {
                "id": "history-question38",
                "text": "Connaissez-vous Brigitte Bardot ?",
                "choices": [
                    {
                        "id": "history-question38-choice1",
                        "text": "Oui, Brigitte Bardot est une actrice de cinéma, chanteuse et militante pour la cause animale"
                    },
                    {
                        "id": "history-question38-choice2",
                        "text": "Non, je ne connais pas Brigitte Bardot"
                    },
                    {
                        "id": "history-question38-choice3",
                        "text": "Oui, c'est une femme politique française"
                    },
                    {
                        "id": "history-question38-choice4",
                        "text": "Oui, c'est une écrivaine française"
                    }
                ],
                "correctChoice": "history-question38-choice1"
            },
            {
                "id": "history-question39",
                "text": "Quels sont des philosophes français connus des Lumières ?",
                "choices": [
                    {
                        "id": "history-question39-choice1",
                        "text": "Montesquieu, Voltaire, Diderot, Rousseau, Spinoza, Descartes"
                    },
                    {
                        "id": "history-question39-choice2",
                        "text": "Sartre, Camus, Beauvoir, Foucault, Deleuze"
                    },
                    {
                        "id": "history-question39-choice3",
                        "text": "Comte, Durkheim, Bergson, Sartre"
                    },
                    {
                        "id": "history-question39-choice4",
                        "text": "Pascal, Descartes, Malebranche, Bossuet"
                    }
                ],
                "correctChoice": "history-question39-choice1"
            },
            {
                "id": "history-question40",
                "text": "Qu'est-ce que la philosophie des Lumières ?",
                "choices": [
                    {
                        "id": "history-question40-choice1",
                        "text": "C'est un mouvement culturel, philosophique, littéraire et intellectuel qui émerge dans la seconde moitié du XVIIe siècle avec plusieurs philosophes comme Voltaire et Rousseau"
                    },
                    {
                        "id": "history-question40-choice2",
                        "text": "C'est un mouvement artistique français du XIXe siècle"
                    },
                    {
                        "id": "history-question40-choice3",
                        "text": "C'est un mouvement politique et social du XXe siècle"
                    },
                    {
                        "id": "history-question40-choice4",
                        "text": "C'est un mouvement scientifique et technologique du XVIIIe siècle"
                    }
                ],
                "correctChoice": "history-question40-choice1"
            },
            {
                "id": "history-question41",
                "text": "Connaissez-vous des sportifs français ?",
                "choices": [
                    {
                        "id": "history-question41-choice1",
                        "text": "Michel Platini, Zinedine Zidane, Richard Virenck, Yannick Noah, Teddy Riner"
                    },
                    {
                        "id": "history-question41-choice2",
                        "text": "Lionel Messi, Cristiano Ronaldo, Neymar, Kylian Mbappé"
                    },
                    {
                        "id": "history-question41-choice3",
                        "text": "Usain Bolt, Michael Phelps, Muhammad Ali, Serena Williams"
                    },
                    {
                        "id": "history-question41-choice4",
                        "text": "Federer, Nadal, Djokovic, Murray"
                    }
                ],
                "correctChoice": "history-question41-choice1"
            },
            {
                "id": "history-question42",
                "text": "Est-ce que le port de signes religieux est autorisé dans l'espace public en France ?",
                "choices": [
                    {
                        "id": "history-question42-choice1",
                        "text": "Oui, mais pas dans les écoles, les collèges et les lycées publics"
                    },
                    {
                        "id": "history-question42-choice2",
                        "text": "Non, le port de signes religieux est totalement interdit dans l'espace public"
                    },
                    {
                        "id": "history-question42-choice3",
                        "text": "Oui, le port de signes religieux est autorisé partout"
                    },
                    {
                        "id": "history-question42-choice4",
                        "text": "Non, seuls certains signes religieux sont autorisés"
                    }
                ],
                "correctChoice": "history-question42-choice1"
            },
            {
                "id": "history-question43",
                "text": "Qu'est-ce que la loi de 2004 en France ?",
                "choices": [
                    {
                        "id": "history-question43-choice1",
                        "text": "La loi de 2004 stipule que dans les écoles, les collèges et les lycées publics, le port de signes ou tenue par lesquels les élèves manifestent ostensiblement une appartenance religieuse est interdit"
                    },
                    {
                        "id": "history-question43-choice2",
                        "text": "La loi de 2004 a aboli l'esclavage en France"
                    },
                    {
                        "id": "history-question43-choice3",
                        "text": "La loi de 2004 a instauré l'obligation scolaire jusqu'à 16 ans"
                    },
                    {
                        "id": "history-question43-choice4",
                        "text": "La loi de 2004 a accordé le droit de vote aux femmes"
                    }
                ],
                "correctChoice": "history-question43-choice1"
            },
            {
                "id": "history-question44",
                "text": "Que fêtons-nous le 1er mai en France ?",
                "choices": [
                    {
                        "id": "history-question44-choice1",
                        "text": "La fête du travail"
                    },
                    {
                        "id": "history-question44-choice2",
                        "text": "La fête nationale"
                    },
                    {
                        "id": "history-question44-choice3",
                        "text": "L'armistice de la Première Guerre mondiale"
                    },
                    {
                        "id": "history-question44-choice4",
                        "text": "La journée de la femme"
                    }
                ],
                "correctChoice": "history-question44-choice1"
            },
            {
                "id": "history-question45",
                "text": "Quel grand événement sportif français connaissez-vous ?",
                "choices": [
                    {
                        "id": "history-question45-choice1",
                        "text": "Le Tour de France, Roland Garros, le Marathon de Paris"
                    },
                    {
                        "id": "history-question45-choice2",
                        "text": "La Coupe du Monde de football, les Jeux Olympiques"
                    },
                    {
                        "id": "history-question45-choice3",
                        "text": "Le Tournoi des Six Nations, les 24 Heures du Mans"
                    },
                    {
                        "id": "history-question45-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question45-choice4"
            },
            {
                "id": "history-question46",
                "text": "Qui est Charles de Gaulle ?",
                "choices": [
                    {
                        "id": "history-question46-choice1",
                        "text": "Un militaire, un résistant et un homme politique français, fondateur de la 5e République"
                    },
                    {
                        "id": "history-question46-choice2",
                        "text": "Un écrivain français du XIXe siècle"
                    },
                    {
                        "id": "history-question46-choice3",
                        "text": "Un peintre français impressionniste"
                    },
                    {
                        "id": "history-question46-choice4",
                        "text": "Un philosophe des Lumières"
                    }
                ],
                "correctChoice": "history-question46-choice1"
            },
            {
                "id": "history-question47",
                "text": "Quels sont des plats typiques français que vous connaissez ?",
                "choices": [
                    {
                        "id": "history-question47-choice1",
                        "text": "Bouillabaisse, pot-au-feu, quiche lorraine, galettes bretonnes"
                    },
                    {
                        "id": "history-question47-choice2",
                        "text": "Pizza, spaghetti bolognaise, lasagnes"
                    },
                    {
                        "id": "history-question47-choice3",
                        "text": "Fish and chips, curry, tikka masala"
                    },
                    {
                        "id": "history-question47-choice4",
                        "text": "Sushi, sashimi, tempura"
                    }
                ],
                "correctChoice": "history-question47-choice1"
            },
            {
                "id": "history-question48",
                "text": "Avez-vous mangé des spécialités locales lors de vos voyages en France ?",
                "choices": [
                    {
                        "id": "history-question48-choice1",
                        "text": "Oui, j'ai goûté des plats locaux des endroits que j'ai visités"
                    },
                    {
                        "id": "history-question48-choice2",
                        "text": "Non, je n'ai pas eu l'occasion de manger des spécialités locales"
                    },
                    {
                        "id": "history-question48-choice3",
                        "text": "Oui, mais seulement dans les restaurants gastronomiques"
                    },
                    {
                        "id": "history-question48-choice4",
                        "text": "Non, je préfère manger de la nourriture internationale"
                    }
                ],
                "correctChoice": "history-question48-choice1"
            },
            {
                "id": "history-question49",
                "text": "Quels sont des événements historiques français qui vous ont le plus marqué ?",
                "choices": [
                    {
                        "id": "history-question49-choice1",
                        "text": "La Révolution française, les deux guerres mondiales"
                    },
                    {
                        "id": "history-question49-choice2",
                        "text": "L'expansion coloniale, la Restauration monarchique"
                    },
                    {
                        "id": "history-question49-choice3",
                        "text": "L'avènement de la Vème République, la séparation de l'Église et de l'État"
                    },
                    {
                        "id": "history-question49-choice4",
                        "text": "L'abolition de l'esclavage, l'institution de l'école obligatoire"
                    }
                ],
                "correctChoice": "history-question49-choice1"
            },
            {
                "id": "history-question50",
                "text": "Quels sont des personnages historiques français qui vous ont le plus marqué ?",
                "choices": [
                    {
                        "id": "history-question50-choice1",
                        "text": "Charles de Gaulle, Napoléon"
                    },
                    {
                        "id": "history-question50-choice2",
                        "text": "Louis XIV, François Ier"
                    },
                    {
                        "id": "history-question50-choice3",
                        "text": "Jeanne d'Arc, Marie Curie"
                    },
                    {
                        "id": "history-question50-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question50-choice4"
            },
            {
                "id": "history-question51",
                "text": "Quels sont des animateurs de télévision français que vous connaissez ?",
                "choices": [
                    {
                        "id": "history-question51-choice1",
                        "text": "Christophe de Chavanne, Vincent Lagaffe, Jean-Pierre Foucault"
                    },
                    {
                        "id": "history-question51-choice2",
                        "text": "Michel Drucker, Nagui, Arthur"
                    },
                    {
                        "id": "history-question51-choice3",
                        "text": "Stéphane Bern, Cyril Lignac, Philippe Etchebest"
                    },
                    {
                        "id": "history-question51-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question51-choice1"
            },
            {
                "id": "history-question52",
                "text": "Quels sont des chanteurs français connus ?",
                "choices": [
                    {
                        "id": "history-question52-choice1",
                        "text": "Dalida, Johnny Hallyday, Charles Aznavour, Georges Brassens, Claude François"
                    },
                    {
                        "id": "history-question52-choice2",
                        "text": "Edith Piaf, Jacques Brel, Barbara, Serge Gainsbourg"
                    },
                    {
                        "id": "history-question52-choice3",
                        "text": "Michel Polnareff, Françoise Hardy, Sheila, Patrick Bruel"
                    },
                    {
                        "id": "history-question52-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question52-choice4"
            },
            {
                "id": "history-question53",
                "text": "Quels sont des journalistes français connus ?",
                "choices": [
                    {
                        "id": "history-question53-choice1",
                        "text": "Gilles Bouleau, Anne-Sophie Lapix, Anne-Claire Coudray, Edwy Plenel, Yann Barthès"
                    },
                    {
                        "id": "history-question53-choice2",
                        "text": "Jean-Pierre Pernaut, Élise Lucet, Laurence Ferrari, Aïda Touihri"
                    },
                    {
                        "id": "history-question53-choice3",
                        "text": "Patrick Poivre d'Arvor, Claire Chazal, Dominique Strauss-Kahn"
                    },
                    {
                        "id": "history-question53-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question53-choice1"
            },
            {
                "id": "history-question54",
                "text": "Quels sont des acteurs-actrices français connus ?",
                "choices": [
                    {
                        "id": "history-question54-choice1",
                        "text": "Jean Dujardin, Gérard Depardieu, Marion Cotillard"
                    },
                    {
                        "id": "history-question54-choice2",
                        "text": "Juliette Binoche, Daniel Auteuil, Isabelle Huppert"
                    },
                    {
                        "id": "history-question54-choice3",
                        "text": "Omar Sy, Dany Boon, Audrey Tautou"
                    },
                    {
                        "id": "history-question54-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question54-choice4"
            },
            {
                "id": "history-question55",
                "text": "Quelles sont des anciennes colonies françaises ?",
                "choices": [
                    {
                        "id": "history-question55-choice1",
                        "text": "Algérie, Sénégal, Mali, Côte d'Ivoire"
                    },
                    {
                        "id": "history-question55-choice2",
                        "text": "Maroc, Tunisie, Syrie, Liban"
                    },
                    {
                        "id": "history-question55-choice3",
                        "text": "Indochine (Vietnam, Cambodge, Laos), Madagascar"
                    },
                    {
                        "id": "history-question55-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "history-question55-choice4"
            },
            {
                "id": "history-question56",
                "text": "Quels sont les alliés de la France pendant la Première Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question56-choice1",
                        "text": "La France, l'Angleterre, la Russie et les États-Unis"
                    },
                    {
                        "id": "history-question56-choice2",
                        "text": "La France, l'Allemagne, l'Autriche-Hongrie et l'Italie"
                    },
                    {
                        "id": "history-question56-choice3",
                        "text": "La France, la Belgique, les Pays-Bas et le Luxembourg"
                    },
                    {
                        "id": "history-question56-choice4",
                        "text": "La France, l'Espagne, le Portugal et la Suisse"
                    }
                ],
                "correctChoice": "history-question56-choice1"
            },
            {
                "id": "history-question57",
                "text": "Quels sont les alliés de la France pendant la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question57-choice1",
                        "text": "La France, l'Angleterre, l'URSS et les États-Unis"
                    },
                    {
                        "id": "history-question57-choice2",
                        "text": "La France, l'Allemagne, l'Italie et le Japon"
                    },
                    {
                        "id": "history-question57-choice3",
                        "text": "La France, la Belgique, les Pays-Bas et le Luxembourg"
                    },
                    {
                        "id": "history-question57-choice4",
                        "text": "La France, l'Espagne, le Portugal et la Suisse"
                    }
                ],
                "correctChoice": "history-question57-choice1"
            },
            {
                "id": "history-question58",
                "text": "Qu'est-ce que la guerre de Cent Ans ?",
                "choices": [
                    {
                        "id": "history-question58-choice1",
                        "text": "Une guerre résultant d'un conflit entre les rois de France et les rois d'Angleterre durant le Moyen-Âge"
                    },
                    {
                        "id": "history-question58-choice2",
                        "text": "Une guerre entre la France et l'Allemagne au 20ème siècle"
                    },
                    {
                        "id": "history-question58-choice3",
                        "text": "Une guerre entre la France et l'Espagne au 16ème siècle"
                    },
                    {
                        "id": "history-question58-choice4",
                        "text": "Une guerre entre la France et l'Italie au 19ème siècle"
                    }
                ],
                "correctChoice": "history-question58-choice1"
            },
            {
                "id": "history-question59",
                "text": "Quel était le surnom des soldats français pendant la Première Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question59-choice1",
                        "text": "Les Poilus"
                    },
                    {
                        "id": "history-question59-choice2",
                        "text": "Les Doughboys"
                    },
                    {
                        "id": "history-question59-choice3",
                        "text": "Les Tommies"
                    },
                    {
                        "id": "history-question59-choice4",
                        "text": "Les Pioupious"
                    }
                ],
                "correctChoice": "history-question59-choice1"
            },
            {
                "id": "history-question60",
                "text": "Quand a eu lieu la Première Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question60-choice1",
                        "text": "Du 28 juillet 1914 au 11 novembre 1918"
                    },
                    {
                        "id": "history-question60-choice2",
                        "text": "Du 1er août 1914 au 11 novembre 1918"
                    },
                    {
                        "id": "history-question60-choice3",
                        "text": "Du 28 juin 1914 au 11 novembre 1918"
                    },
                    {
                        "id": "history-question60-choice4",
                        "text": "Du 28 juillet 1914 au 14 novembre 1918"
                    }
                ],
                "correctChoice": "history-question60-choice1"
            },
            {
                "id": "history-question61",
                "text": "Quand a eu lieu la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question61-choice1",
                        "text": "Du 1er septembre 1939 au 2 septembre 1945"
                    },
                    {
                        "id": "history-question61-choice2",
                        "text": "Du 3 septembre 1939 au 8 mai 1945"
                    },
                    {
                        "id": "history-question61-choice3",
                        "text": "Du 1er septembre 1939 au 9 mai 1945"
                    },
                    {
                        "id": "history-question61-choice4",
                        "text": "Du 1er septembre 1939 au 6 juin 1944"
                    }
                ],
                "correctChoice": "history-question61-choice1"
            },
            {
                "id": "history-question62",
                "text": "Quand a eu lieu le débarquement des alliés durant la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question62-choice1",
                        "text": "Le 6 juin 1944"
                    },
                    {
                        "id": "history-question62-choice2",
                        "text": "Le 8 mai 1945"
                    },
                    {
                        "id": "history-question62-choice3",
                        "text": "Le 11 novembre 1918"
                    },
                    {
                        "id": "history-question62-choice4",
                        "text": "Le 1er septembre 1939"
                    }
                ],
                "correctChoice": "history-question62-choice1"
            },
            {
                "id": "history-question63",
                "text": "Où a eu lieu le débarquement des alliés durant la Seconde Guerre mondiale ?",
                "choices": [
                    {
                        "id": "history-question63-choice1",
                        "text": "En Normandie"
                    },
                    {
                        "id": "history-question63-choice2",
                        "text": "En Provence"
                    },
                    {
                        "id": "history-question63-choice3",
                        "text": "En Italie"
                    },
                    {
                        "id": "history-question63-choice4",
                        "text": "En Belgique"
                    }
                ],
                "correctChoice": "history-question63-choice1"
            },
            {
                "id": "history-question64",
                "text": "Quand l'esclavage a-t-il été aboli en France ?",
                "choices": [
                    {
                        "id": "history-question64-choice1",
                        "text": "Le 27 avril 1848"
                    },
                    {
                        "id": "history-question64-choice2",
                        "text": "Le 14 juillet 1789"
                    },
                    {
                        "id": "history-question64-choice3",
                        "text": "Le 5 mai 1789"
                    },
                    {
                        "id": "history-question64-choice4",
                        "text": "Le 11 novembre 1918"
                    }
                ],
                "correctChoice": "history-question64-choice1"
            },
            {
                "id": "history-question65",
                "text": "Depuis quand l'école est-elle obligatoire en France ?",
                "choices": [
                    {
                        "id": "history-question65-choice1",
                        "text": "Le 28 mars 1882"
                    },
                    {
                        "id": "history-question65-choice2",
                        "text": "Le 1er janvier 1900"
                    },
                    {
                        "id": "history-question65-choice3",
                        "text": "Le 1er septembre 1939"
                    },
                    {
                        "id": "history-question65-choice4",
                        "text": "Le 1er janvier 1970"
                    }
                ],
                "correctChoice": "history-question65-choice1"
            }
        ]
    },
    {
        "id": "Europe",
        "title": "Europe",
        "description": "Testez vos connaissances sur le thème: Europe",
        "imageUrl": "https://picsum.photos/200/300",
        "questions": [
            {
                "id": "europe-question1",
                "text": "Quelle est la monnaie actuelle de la France ?",
                "choices": [
                    {
                        "id": "europe-question1-choice1",
                        "text": "Franc français"
                    },
                    {
                        "id": "europe-question1-choice2",
                        "text": "Euro"
                    },
                    {
                        "id": "europe-question1-choice3",
                        "text": "Livre sterling"
                    },
                    {
                        "id": "europe-question1-choice4",
                        "text": "Dollar américain"
                    }
                ],
                "correctChoice": "europe-question1-choice2"
            },
            {
                "id": "europe-question2",
                "text": "Quelle est la devise de l'Union européenne ?",
                "choices": [
                    {
                        "id": "europe-question2-choice1",
                        "text": "Unité dans la diversité"
                    },
                    {
                        "id": "europe-question2-choice2",
                        "text": "E Pluribus Unum"
                    },
                    {
                        "id": "europe-question2-choice3",
                        "text": "Liberté, égalité, fraternité"
                    },
                    {
                        "id": "europe-question2-choice4",
                        "text": "Paix et prospérité"
                    }
                ],
                "correctChoice": "europe-question2-choice1"
            },
            {
                "id": "europe-question3",
                "text": "Connaissez-vous l'hymne de l'Union européenne ?",
                "choices": [
                    {
                        "id": "europe-question3-choice1",
                        "text": "La Marseillaise"
                    },
                    {
                        "id": "europe-question3-choice2",
                        "text": "God Save the Queen"
                    },
                    {
                        "id": "europe-question3-choice3",
                        "text": "Ode à la joie"
                    },
                    {
                        "id": "europe-question3-choice4",
                        "text": "Marche royale d'Henri VIII"
                    }
                ],
                "correctChoice": "europe-question3-choice3"
            },
            {
                "id": "europe-question4",
                "text": "Combien de pays compte l'Union européenne ?",
                "choices": [
                    {
                        "id": "europe-question4-choice1",
                        "text": "25"
                    },
                    {
                        "id": "europe-question4-choice2",
                        "text": "27"
                    },
                    {
                        "id": "europe-question4-choice3",
                        "text": "30"
                    },
                    {
                        "id": "europe-question4-choice4",
                        "text": "20"
                    }
                ],
                "correctChoice": "europe-question4-choice2"
            },
            {
                "id": "europe-question5",
                "text": "Dans quel intérêt les pays européens rejoignent-ils l'Union européenne ?",
                "choices": [
                    {
                        "id": "europe-question5-choice1",
                        "text": "Développer une monnaie unique"
                    },
                    {
                        "id": "europe-question5-choice2",
                        "text": "Promouvoir la diversité culturelle"
                    },
                    {
                        "id": "europe-question5-choice3",
                        "text": "Renforcer la coopération économique"
                    },
                    {
                        "id": "europe-question5-choice4",
                        "text": "Gagner l'indépendance politique"
                    }
                ],
                "correctChoice": "europe-question5-choice3"
            },
            {
                "id": "europe-question6",
                "text": "Où se trouve le siège du Parlement européen ?",
                "choices": [
                    {
                        "id": "europe-question6-choice1",
                        "text": "Paris, France"
                    },
                    {
                        "id": "europe-question6-choice2",
                        "text": "Strasbourg, France"
                    },
                    {
                        "id": "europe-question6-choice3",
                        "text": "Bruxelles, Belgique"
                    },
                    {
                        "id": "europe-question6-choice4",
                        "text": "Luxembourg, Luxembourg"
                    }
                ],
                "correctChoice": "europe-question6-choice2"
            },
            {
                "id": "europe-question7",
                "text": "Où se trouve le siège de la Commission européenne ?",
                "choices": [
                    {
                        "id": "europe-question7-choice1",
                        "text": "Paris, France"
                    },
                    {
                        "id": "europe-question7-choice2",
                        "text": "Strasbourg, France"
                    },
                    {
                        "id": "europe-question7-choice3",
                        "text": "Bruxelles, Belgique"
                    },
                    {
                        "id": "europe-question7-choice4",
                        "text": "Luxembourg, Luxembourg"
                    }
                ],
                "correctChoice": "europe-question7-choice3"
            },
            {
                "id": "europe-question8",
                "text": "Quel pays détient la présidence de l'Union européenne ?",
                "choices": [
                    {
                        "id": "europe-question8-choice1",
                        "text": "France"
                    },
                    {
                        "id": "europe-question8-choice2",
                        "text": "Allemagne"
                    },
                    {
                        "id": "europe-question8-choice3",
                        "text": "Belgique"
                    },
                    {
                        "id": "europe-question8-choice4",
                        "text": "Italie"
                    }
                ],
                "correctChoice": "europe-question8-choice3"
            },
            {
                "id": "europe-question9",
                "text": "Combien d'étoiles le drapeau européen comporte-t-il ?",
                "choices": [
                    {
                        "id": "europe-question9-choice1",
                        "text": "6"
                    },
                    {
                        "id": "europe-question9-choice2",
                        "text": "9"
                    },
                    {
                        "id": "europe-question9-choice3",
                        "text": "12"
                    },
                    {
                        "id": "europe-question9-choice4",
                        "text": "15"
                    }
                ],
                "correctChoice": "europe-question9-choice3"
            },
            {
                "id": "europe-question10",
                "text": "Que symbolisent les étoiles du drapeau européen ?",
                "choices": [
                    {
                        "id": "europe-question10-choice1",
                        "text": "Les continents européens"
                    },
                    {
                        "id": "europe-question10-choice2",
                        "text": "Les idéaux d'unité, de solidarité et d'harmonie entre les peuples européens"
                    },
                    {
                        "id": "europe-question10-choice3",
                        "text": "Les pays membres fondateurs de l'UE"
                    },
                    {
                        "id": "europe-question10-choice4",
                        "text": "Les principales valeurs européennes"
                    }
                ],
                "correctChoice": "europe-question10-choice2"
            },
            {
                "id": "europe-question11",
                "text": "Que représente la journée du 9 mai ?",
                "choices": [
                    {
                        "id": "europe-question11-choice1",
                        "text": "La journée de la paix"
                    },
                    {
                        "id": "europe-question11-choice2",
                        "text": "La journée de l'Europe"
                    },
                    {
                        "id": "europe-question11-choice3",
                        "text": "La journée de l'unité européenne"
                    },
                    {
                        "id": "europe-question11-choice4",
                        "text": "La journée de l'indépendance européenne"
                    }
                ],
                "correctChoice": "europe-question11-choice2"
            },
            {
                "id": "europe-question12",
                "text": "Quels sont les symboles de l'Union européenne ?",
                "choices": [
                    {
                        "id": "europe-question12-choice1",
                        "text": "Le drapeau européen uniquement"
                    },
                    {
                        "id": "europe-question12-choice2",
                        "text": "La monnaie européenne (euro) uniquement"
                    },
                    {
                        "id": "europe-question12-choice3",
                        "text": "Le drapeau européen, la devise de l'Europe, l'hymne européen et la journée de l'Europe"
                    },
                    {
                        "id": "europe-question12-choice4",
                        "text": "La devise de l'Europe et l'hymne européen uniquement"
                    }
                ],
                "correctChoice": "europe-question12-choice3"
            },
            {
                "id": "europe-question13",
                "text": "Que connaissez-vous sur le traité de Rome ? Et quand a-t-il eu lieu ?",
                "choices": [
                    {
                        "id": "europe-question13-choice1",
                        "text": "Le traité de Rome a eu lieu en 1950 et a établi la Communauté européenne du charbon et de l'acier."
                    },
                    {
                        "id": "europe-question13-choice2",
                        "text": "Le traité de Rome a eu lieu en 1957 et a établi la Communauté économique européenne et la Communauté européenne de l'énergie atomique."
                    },
                    {
                        "id": "europe-question13-choice3",
                        "text": "Le traité de Rome a eu lieu en 1967 et a établi la Communauté européenne."
                    },
                    {
                        "id": "europe-question13-choice4",
                        "text": "Le traité de Rome a eu lieu en 1973 et a établi l'Acte unique européen."
                    }
                ],
                "correctChoice": "europe-question13-choice2"
            },
            {
                "id": "europe-question14",
                "text": "Qui est Jeanne d'Arc ?",
                "choices": [
                    {
                        "id": "europe-question14-choice1",
                        "text": "Une célèbre reine française du Moyen Âge."
                    },
                    {
                        "id": "europe-question14-choice2",
                        "text": "Une écrivaine française du 19ème siècle."
                    },
                    {
                        "id": "europe-question14-choice3",
                        "text": "Une jeune paysanne française qui a conduit les troupes françaises à la libération d'une partie du territoire français durant la guerre des cent ans."
                    },
                    {
                        "id": "europe-question14-choice4",
                        "text": "Une artiste française renommée pour ses peintures impressionnistes."
                    }
                ],
                "correctChoice": "europe-question14-choice3"
            },
            {
                "id": "europe-question15",
                "text": "Qu'est-ce que la loi Veil ?",
                "choices": [
                    {
                        "id": "europe-question15-choice1",
                        "text": "Une loi sur la liberté de la presse."
                    },
                    {
                        "id": "europe-question15-choice2",
                        "text": "Une loi sur l'égalité des sexes."
                    },
                    {
                        "id": "europe-question15-choice3",
                        "text": "Une loi qui encadre l'interruption volontaire de grossesse, votée le 17 janvier 1975."
                    },
                    {
                        "id": "europe-question15-choice4",
                        "text": "Une loi sur la protection de l'environnement."
                    }
                ],
                "correctChoice": "europe-question15-choice3"
            },
            {
                "id": "europe-question16",
                "text": "Que pensez-vous de la loi Veil ?",
                "choices": [
                    {
                        "id": "europe-question16-choice1",
                        "text": "C'est une atteinte aux droits des femmes."
                    },
                    {
                        "id": "europe-question16-choice2",
                        "text": "C'est une loi nécessaire pour garantir le droit des femmes à disposer de leur corps."
                    },
                    {
                        "id": "europe-question16-choice3",
                        "text": "C'est une loi qui devrait être abolie."
                    },
                    {
                        "id": "europe-question16-choice4",
                        "text": "C'est une loi qui ne devrait pas être appliquée."
                    }
                ],
                "correctChoice": "europe-question16-choice2"
            },
            {
                "id": "europe-question17",
                "text": "Que pensez-vous de la parité hommes-femmes ?",
                "choices": [
                    {
                        "id": "europe-question17-choice1",
                        "text": "C'est une mesure discriminatoire."
                    },
                    {
                        "id": "europe-question17-choice2",
                        "text": "C'est une exigence inutile."
                    },
                    {
                        "id": "europe-question17-choice3",
                        "text": "C'est un principe fondamental pour assurer l'égalité des droits."
                    },
                    {
                        "id": "europe-question17-choice4",
                        "text": "C'est une idée radicale."
                    }
                ],
                "correctChoice": "europe-question17-choice3"
            },
            {
                "id": "europe-question18",
                "text": "Avons-nous atteint cette parité dans tous les domaines ?",
                "choices": [
                    {
                        "id": "europe-question18-choice1",
                        "text": "Oui, la parité est réalisée dans tous les domaines."
                    },
                    {
                        "id": "europe-question18-choice2",
                        "text": "Non, il reste des progrès à faire dans de nombreux domaines."
                    },
                    {
                        "id": "europe-question18-choice3",
                        "text": "La parité est un objectif impossible à atteindre."
                    },
                    {
                        "id": "europe-question18-choice4",
                        "text": "La parité n'est pas importante."
                    }
                ],
                "correctChoice": "europe-question18-choice2"
            },
            {
                "id": "europe-question19",
                "text": "Quelles seront les prochaines élections ?",
                "choices": [
                    {
                        "id": "europe-question19-choice1",
                        "text": "Élections législatives"
                    },
                    {
                        "id": "europe-question19-choice2",
                        "text": "Élections présidentielles"
                    },
                    {
                        "id": "europe-question19-choice3",
                        "text": "Élections européennes"
                    },
                    {
                        "id": "europe-question19-choice4",
                        "text": "Élections municipales"
                    }
                ],
                "correctChoice": "europe-question19-choice3"
            },
            {
                "id": "europe-question20",
                "text": "Qui décidera de vous octroyer ou non la nationalité française ?",
                "choices": [
                    {
                        "id": "europe-question20-choice1",
                        "text": "Le président de la République"
                    },
                    {
                        "id": "europe-question20-choice2",
                        "text": "Le ministre de l'Intérieur"
                    },
                    {
                        "id": "europe-question20-choice3",
                        "text": "Le maire de votre commune"
                    },
                    {
                        "id": "europe-question20-choice4",
                        "text": "Le président de l'Assemblée nationale"
                    }
                ],
                "correctChoice": "europe-question20-choice2"
            },
            {
                "id": "europe-question21",
                "text": "Quel ministre gère les relations entre l'État et les institutions religieuses ?",
                "choices": [
                    {
                        "id": "europe-question21-choice1",
                        "text": "Ministre de la Justice"
                    },
                    {
                        "id": "europe-question21-choice2",
                        "text": "Ministre de l'Éducation nationale"
                    },
                    {
                        "id": "europe-question21-choice3",
                        "text": "Ministre de l'Intérieur"
                    },
                    {
                        "id": "europe-question21-choice4",
                        "text": "Ministre de la Culture"
                    }
                ],
                "correctChoice": "europe-question21-choice3"
            },
            {
                "id": "europe-question22",
                "text": "Qu'est-ce que la discrimination pour vous ?",
                "choices": [
                    {
                        "id": "europe-question22-choice1",
                        "text": "Un droit fondamental"
                    },
                    {
                        "id": "europe-question22-choice2",
                        "text": "Une pratique juste"
                    },
                    {
                        "id": "europe-question22-choice3",
                        "text": "Un acte injuste basé sur des différences de traitement"
                    },
                    {
                        "id": "europe-question22-choice4",
                        "text": "Un acte nécessaire pour maintenir l'ordre social"
                    }
                ],
                "correctChoice": "europe-question22-choice3"
            },
            {
                "id": "europe-question23",
                "text": "La discrimination est-elle légale en France ?",
                "choices": [
                    {
                        "id": "europe-question23-choice1",
                        "text": "Oui, dans certaines circonstances"
                    },
                    {
                        "id": "europe-question23-choice2",
                        "text": "Non, c'est un délit"
                    },
                    {
                        "id": "europe-question23-choice3",
                        "text": "Oui, si elle est pratiquée par des entreprises privées"
                    },
                    {
                        "id": "europe-question23-choice4",
                        "text": "Non, mais elle est tolérée dans certains cas"
                    }
                ],
                "correctChoice": "europe-question23-choice2"
            },
            {
                "id": "europe-question24",
                "text": "En quelle année les citoyens français sont-ils devenus européens ?",
                "choices": [
                    {
                        "id": "europe-question24-choice1",
                        "text": "1990"
                    },
                    {
                        "id": "europe-question24-choice2",
                        "text": "1992"
                    },
                    {
                        "id": "europe-question24-choice3",
                        "text": "1995"
                    },
                    {
                        "id": "europe-question24-choice4",
                        "text": "2000"
                    }
                ],
                "correctChoice": "europe-question24-choice2"
            },
            {
                "id": "europe-question25",
                "text": "Qui a le droit d'accéder à l'emploi public ?",
                "choices": [
                    {
                        "id": "europe-question25-choice1",
                        "text": "Uniquement les citoyens français"
                    },
                    {
                        "id": "europe-question25-choice2",
                        "text": "Uniquement les résidents permanents"
                    },
                    {
                        "id": "europe-question25-choice3",
                        "text": "Tous les citoyens"
                    },
                    {
                        "id": "europe-question25-choice4",
                        "text": "Uniquement les étrangers avec un permis de travail"
                    }
                ],
                "correctChoice": "europe-question25-choice3"
            },
            {
                "id": "europe-question26",
                "text": "En cas de conflit armé qui pourra être appelé à défendre la patrie ?",
                "choices": [
                    {
                        "id": "europe-question26-choice1",
                        "text": "Tous les citoyens âgés de 18 ans et plus"
                    },
                    {
                        "id": "europe-question26-choice2",
                        "text": "Tous les citoyens âgés de 16 ans et plus"
                    },
                    {
                        "id": "europe-question26-choice3",
                        "text": "Uniquement les citoyens volontaires"
                    },
                    {
                        "id": "europe-question26-choice4",
                        "text": "Les réservistes de l'armée uniquement"
                    }
                ],
                "correctChoice": "europe-question26-choice1"
            },
            {
                "id": "europe-question27",
                "text": "Qu'est-ce que le système de sécurité sociale ?",
                "choices": [
                    {
                        "id": "europe-question27-choice1",
                        "text": "Un programme d'assurance pour les biens immobiliers"
                    },
                    {
                        "id": "europe-question27-choice2",
                        "text": "Un système qui protège les individus des conséquences des événements sociaux"
                    },
                    {
                        "id": "europe-question27-choice3",
                        "text": "Une organisation qui gère la sécurité nationale"
                    },
                    {
                        "id": "europe-question27-choice4",
                        "text": "Un service de police spécialisé dans la lutte contre la cybercriminalité"
                    }
                ],
                "correctChoice": "europe-question27-choice2"
            },
            {
                "id": "europe-question28",
                "text": "Par qui est-il financé ?",
                "choices": [
                    {
                        "id": "europe-question28-choice1",
                        "text": "Uniquement par l'État"
                    },
                    {
                        "id": "europe-question28-choice2",
                        "text": "Par les cotisations des travailleurs et les contributions des employeurs"
                    },
                    {
                        "id": "europe-question28-choice3",
                        "text": "Par les dons de particuliers"
                    },
                    {
                        "id": "europe-question28-choice4",
                        "text": "Par des subventions européennes"
                    }
                ],
                "correctChoice": "europe-question28-choice2"
            },
            {
                "id": "europe-question29",
                "text": "Qui finance les services publics ?",
                "choices": [
                    {
                        "id": "europe-question29-choice1",
                        "text": "Uniquement l'État"
                    },
                    {
                        "id": "europe-question29-choice2",
                        "text": "Les particuliers à travers les taxes et impôts"
                    },
                    {
                        "id": "europe-question29-choice3",
                        "text": "Les entreprises uniquement"
                    },
                    {
                        "id": "europe-question29-choice4",
                        "text": "Par les dons volontaires des citoyens"
                    }
                ],
                "correctChoice": "europe-question29-choice2"
            },
            {
                "id": "europe-question30",
                "text": "Êtes-vous obligés de payer vos impôts ?",
                "choices": [
                    {
                        "id": "europe-question30-choice1",
                        "text": "Oui, mais seulement si vous avez un emploi"
                    },
                    {
                        "id": "europe-question30-choice2",
                        "text": "Non, ce n'est pas obligatoire"
                    },
                    {
                        "id": "europe-question30-choice3",
                        "text": "Oui, c'est obligatoire"
                    },
                    {
                        "id": "europe-question30-choice4",
                        "text": "Non, c'est facultatif"
                    }
                ],
                "correctChoice": "europe-question30-choice3"
            },
            {
                "id": "europe-question31",
                "text": "Si vous obtenez la nationalité française, comptez-vous vivre en France ?",
                "choices": [
                    {
                        "id": "europe-question31-choice1",
                        "text": "Non, je resterai dans mon pays d'origine"
                    },
                    {
                        "id": "europe-question31-choice2",
                        "text": "Oui, je vivrai principalement en France"
                    },
                    {
                        "id": "europe-question31-choice3",
                        "text": "Je ne sais pas encore"
                    },
                    {
                        "id": "europe-question31-choice4",
                        "text": "Je vivrai principalement dans un autre pays européen"
                    }
                ],
                "correctChoice": "europe-question31-choice2"
            },
            {
                "id": "europe-question32",
                "text": "Les citoyens sont-ils toujours satisfaits des choix du gouvernement ?",
                "choices": [
                    {
                        "id": "europe-question32-choice1",
                        "text": "Oui, toujours"
                    },
                    {
                        "id": "europe-question32-choice2",
                        "text": "Non, jamais"
                    },
                    {
                        "id": "europe-question32-choice3",
                        "text": "Oui, la plupart du temps"
                    },
                    {
                        "id": "europe-question32-choice4",
                        "text": "Non, pas toujours"
                    }
                ],
                "correctChoice": "europe-question32-choice4"
            },
            {
                "id": "europe-question33",
                "text": "Comment manifestent-ils leurs désaccords ?",
                "choices": [
                    {
                        "id": "europe-question33-choice1",
                        "text": "En prenant les armes"
                    },
                    {
                        "id": "europe-question33-choice2",
                        "text": "En organisant des manifestations, en faisant grève ou en utilisant d'autres moyens pacifiques"
                    },
                    {
                        "id": "europe-question33-choice3",
                        "text": "En lançant des campagnes de diffamation"
                    },
                    {
                        "id": "europe-question33-choice4",
                        "text": "En pratiquant la désobéissance civile"
                    }
                ],
                "correctChoice": "europe-question33-choice2"
            },
            {
                "id": "europe-question34",
                "text": "Citez des femmes politiques que vous connaissez",
                "choices": [
                    {
                        "id": "europe-question34-choice1",
                        "text": "Marine Le Pen, Angela Merkel, Hillary Clinton, Margaret Thatcher"
                    },
                    {
                        "id": "europe-question34-choice2",
                        "text": "Simone Veil, Ségolène Royal, Elisabeth Borne, Rachida Dati"
                    },
                    {
                        "id": "europe-question34-choice3",
                        "text": "Joan of Arc, Marie Curie, Indira Gandhi, Rosa Parks"
                    },
                    {
                        "id": "europe-question34-choice4",
                        "text": "Michelle Obama, Theresa May, Aung San Suu Kyi, Golda Meir"
                    }
                ],
                "correctChoice": "europe-question34-choice2"
            }
        ]
    },
    {
        "id": "Géographie",
        "title": "Géographie",
        "description": "Testez vos connaissances sur le thème: Géographie",
        "imageUrl": "https://picsum.photos/200/300",
        "questions": [
            {
                "id": "geography-question1",
                "text": "Citez les trois plus grandes villes françaises.",
                "choices": [
                    {
                        "id": "geography-question1-choice1",
                        "text": "Paris, Lyon et Nice"
                    },
                    {
                        "id": "geography-question1-choice2",
                        "text": "Paris, Marseille et Bordeaux"
                    },
                    {
                        "id": "geography-question1-choice3",
                        "text": "Lyon, Marseille et Toulouse"
                    },
                    {
                        "id": "geography-question1-choice4",
                        "text": "Paris, Lyon et Marseille"
                    }
                ],
                "correctChoice": "geography-question1-choice4"
            },
            {
                "id": "geography-question2",
                "text": "Citez trois départements français.",
                "choices": [
                    {
                        "id": "geography-question2-choice1",
                        "text": "Haute-Savoie, Isère et Loire-Atlantique"
                    },
                    {
                        "id": "geography-question2-choice2",
                        "text": "Yvelines, Essone et Paris"
                    },
                    {
                        "id": "geography-question2-choice3",
                        "text": "Haut-Rhin, Bas-Rhin et Haute-Garonne"
                    },
                    {
                        "id": "geography-question2-choice4",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "geography-question2-choice4"
            },
            {
                "id": "geography-question3",
                "text": "Citez trois départements d'outre-mer.",
                "choices": [
                    {
                        "id": "geography-question3-choice1",
                        "text": "Guadeloupe, Martinique et Guyane"
                    },
                    {
                        "id": "geography-question3-choice2",
                        "text": "Mayotte, La Réunion et Saint-Martin"
                    },
                    {
                        "id": "geography-question3-choice3",
                        "text": "Polynésie française, Nouvelle-Calédonie et Saint-Barthélemy"
                    },
                    {
                        "id": "geography-question3-choice4",
                        "text": "Tahiti, Saint-Pierre-et-Miquelon et Sainte-Lucie"
                    }
                ],
                "correctChoice": "geography-question3-choice1"
            },
            {
                "id": "geography-question4",
                "text": "Citez trois régions françaises.",
                "choices": [
                    {
                        "id": "geography-question4-choice1",
                        "text": "Île-de-France, Bretagne et Normandie"
                    },
                    {
                        "id": "geography-question4-choice2",
                        "text": "Corse, Pays de la Loire et Centre-Val de Loire"
                    },
                    {
                        "id": "geography-question4-choice3",
                        "text": "Hauts-de-France, Grand Est, Occitanie et Nouvelle-Aquitaine"
                    },
                    {
                        "id": "geography-question4-choice4",
                        "text": "Bourgogne-Franche-Comté, Auvergne-Rhône-Alpes et Provence-Alpes-Côte d'Azur"
                    },
                    {
                        "id": "geography-question4-choice5",
                        "text": "Tous les choix ci-dessus"
                    }
                ],
                "correctChoice": "geography-question4-choice5"
            },
            {
                "id": "geography-question5",
                "text": "Enumérez les trois types de collectivités françaises.",
                "choices": [
                    {
                        "id": "geography-question5-choice1",
                        "text": "Villes, cantons et territoires"
                    },
                    {
                        "id": "geography-question5-choice2",
                        "text": "Régions, départements et villes"
                    },
                    {
                        "id": "geography-question5-choice3",
                        "text": "Communes, régions et départements"
                    },
                    {
                        "id": "geography-question5-choice4",
                        "text": "Régions, districts et communes"
                    }
                ],
                "correctChoice": "geography-question5-choice3"
            },
            {
                "id": "geography-question6",
                "text": "Citez des fleuves français que vous connaissez.",
                "choices": [
                    {
                        "id": "geography-question6-choice1",
                        "text": "Danube, Volga et Nil"
                    },
                    {
                        "id": "geography-question6-choice2",
                        "text": "Rhin, Rhône et Seine"
                    },
                    {
                        "id": "geography-question6-choice3",
                        "text": "Amazone, Mississippi et Congo"
                    },
                    {
                        "id": "geography-question6-choice4",
                        "text": "Tigre, Euphrate et Gange"
                    }
                ],
                "correctChoice": "geography-question6-choice2"
            },
            {
                "id": "geography-question7",
                "text": "Citez des chaînes de montagne en France que vous connaissez.",
                "choices": [
                    {
                        "id": "geography-question7-choice1",
                        "text": "Andes, Himalaya et Alpes"
                    },
                    {
                        "id": "geography-question7-choice2",
                        "text": "Appalaches, Rocky Mountains et Atlas"
                    },
                    {
                        "id": "geography-question7-choice3",
                        "text": "Alpes, Pyrénées et Massif Central"
                    },
                    {
                        "id": "geography-question7-choice4",
                        "text": "Cordillère des Andes, Sierra Nevada et Montagnes Rocheuses"
                    }
                ],
                "correctChoice": "geography-question7-choice3"
            },
            {
                "id": "geography-question8",
                "text": "En France, quel est le point culminant ?",
                "choices": [
                    {
                        "id": "geography-question8-choice1",
                        "text": "Mont Ventoux"
                    },
                    {
                        "id": "geography-question8-choice2",
                        "text": "Mont Blanc"
                    },
                    {
                        "id": "geography-question8-choice3",
                        "text": "Mont Saint-Michel"
                    },
                    {
                        "id": "geography-question8-choice4",
                        "text": "Pic du Midi de Bigorre"
                    }
                ],
                "correctChoice": "geography-question8-choice2"
            },
            {
                "id": "geography-question9",
                "text": "Quels sont les pays frontaliers ou limitrophes avec la France ?",
                "choices": [
                    {
                        "id": "geography-question9-choice1",
                        "text": "Espagne, Italie et Royaume-Uni"
                    },
                    {
                        "id": "geography-question9-choice2",
                        "text": "Suisse, Belgique et Pays-Bas"
                    },
                    {
                        "id": "geography-question9-choice3",
                        "text": "Portugal, Allemagne et Luxembourg"
                    },
                    {
                        "id": "geography-question9-choice4",
                        "text": "Espagne, Italie et Suisse"
                    }
                ],
                "correctChoice": "geography-question9-choice4"
            },
            {
                "id": "geography-question10",
                "text": "Dans quelle région sommes-nous ?",
                "choices": [
                    {
                        "id": "geography-question10-choice1",
                        "text": "Île-de-France"
                    },
                    {
                        "id": "geography-question10-choice2",
                        "text": "Provence-Alpes-Côte d'Azur"
                    },
                    {
                        "id": "geography-question10-choice3",
                        "text": "Grand Est"
                    },
                    {
                        "id": "geography-question10-choice4",
                        "text": "Auvergne-Rhône-Alpes"
                    }
                ],
                "correctChoice": "geography-question10-choice1"
            },
            {
                "id": "geography-question11",
                "text": "Dans quel département sommes-nous ?",
                "choices": [
                    {
                        "id": "geography-question11-choice1",
                        "text": "Val-de-Marne"
                    },
                    {
                        "id": "geography-question11-choice2",
                        "text": "Hauts-de-Seine"
                    },
                    {
                        "id": "geography-question11-choice3",
                        "text": "Seine-Saint-Denis"
                    },
                    {
                        "id": "geography-question11-choice4",
                        "text": "Yvelines"
                    }
                ],
                "correctChoice": "geography-question11-choice4"
            },
            {
                "id": "geography-question12",
                "text": "Qui est le ou la maire de votre commune ?",
                "choices": [
                    {
                        "id": "geography-question12-choice1",
                        "text": "Emmanuel Macron"
                    },
                    {
                        "id": "geography-question12-choice2",
                        "text": "Jean-Luc Mélenchon"
                    },
                    {
                        "id": "geography-question12-choice3",
                        "text": "Anne Hidalgo"
                    },
                    {
                        "id": "geography-question12-choice4",
                        "text": "Raphael Cognet"
                    }
                ],
                "correctChoice": "geography-question12-choice4"
            }
        ]
    },
    {
        "id": "Politique",
        "title": "Politique",
        "description": "Testez vos connaissances sur le thème: Politique",
        "imageUrl": "https://picsum.photos/200/300",
        "questions": [
            {
                "id": "politics-question1",
                "text": "Quelles sont les valeurs ou la devise de la République française ?",
                "choices": [
                    {
                        "id": "politics-question1-choice1",
                        "text": "Liberté, égalité, fraternité."
                    },
                    {
                        "id": "politics-question1-choice2",
                        "text": "Liberté, égalité, solidarité."
                    },
                    {
                        "id": "politics-question1-choice3",
                        "text": "Liberté, fraternité, égalité."
                    },
                    {
                        "id": "politics-question1-choice4",
                        "text": "Liberté, égalité, justice."
                    }
                ],
                "correctChoice": "politics-question1-choice1"
            },
            {
                "id": "politics-question2",
                "text": "Si l'on devait ajouter une valeur, quelle sera-t-elle selon vous ?",
                "choices": [
                    {
                        "id": "politics-question2-choice1",
                        "text": "Laïcité."
                    },
                    {
                        "id": "politics-question2-choice2",
                        "text": "Solidarité."
                    },
                    {
                        "id": "politics-question2-choice3",
                        "text": "Justice."
                    },
                    {
                        "id": "politics-question2-choice4",
                        "text": "Équité."
                    }
                ],
                "correctChoice": "politics-question2-choice1"
            },
            {
                "id": "politics-question3",
                "text": "Qu'est-ce que la laïcité ?",
                "choices": [
                    {
                        "id": "politics-question3-choice1",
                        "text": "La laïcité garantit la liberté des orientations politiques."
                    },
                    {
                        "id": "politics-question3-choice2",
                        "text": "La laïcité garantit la liberté de croire ou de ne pas croire ainsi que la neutralité de l'Etat face aux religions."
                    },
                    {
                        "id": "politics-question3-choice3",
                        "text": "La laïcité garantit le droit de vote."
                    },
                    {
                        "id": "politics-question3-choice4",
                        "text": "La laïcité garantit la liberté de penser."
                    }
                ],
                "correctChoice": "politics-question3-choice2"
            },
            {
                "id": "politics-question4",
                "text": "Qu'est-ce que pour vous la démocratie ?",
                "choices": [
                    {
                        "id": "politics-question4-choice1",
                        "text": "Un régime politique autoritaire."
                    },
                    {
                        "id": "politics-question4-choice2",
                        "text": "Un régime politique monarchique."
                    },
                    {
                        "id": "politics-question4-choice3",
                        "text": "Un régime politique où le peuple est souverain."
                    },
                    {
                        "id": "politics-question4-choice4",
                        "text": "Un régime politique dirigé par une seule personne."
                    }
                ],
                "correctChoice": "politics-question4-choice3"
            },
            {
                "id": "politics-question5",
                "text": "Quelles sont les formes de la démocratie ?",
                "choices": [
                    {
                        "id": "politics-question5-choice1",
                        "text": "Démocratie directe, représentative, théocratique."
                    },
                    {
                        "id": "politics-question5-choice2",
                        "text": "Démocratie participative, directe, indirecte."
                    },
                    {
                        "id": "politics-question5-choice3",
                        "text": "Démocratie représentative, participative, oligarchique."
                    },
                    {
                        "id": "politics-question5-choice4",
                        "text": "Démocratie directe, participative, représentative."
                    }
                ],
                "correctChoice": "politics-question5-choice4"
            },
            {
                "id": "politics-question6",
                "text": "Êtes-vous d'accord avec le régime démocratique ?",
                "choices": [
                    {
                        "id": "politics-question6-choice1",
                        "text": "Oui, totalement."
                    },
                    {
                        "id": "politics-question6-choice2",
                        "text": "Non, pas du tout."
                    },
                    {
                        "id": "politics-question6-choice3",
                        "text": "Je ne sais pas."
                    },
                    {
                        "id": "politics-question6-choice4",
                        "text": "Cela dépend des circonstances."
                    }
                ],
                "correctChoice": "politics-question6-choice1"
            },
            {
                "id": "politics-question7",
                "text": "Quelles formes de libertés sont garanties en démocratie ?",
                "choices": [
                    {
                        "id": "politics-question7-choice1",
                        "text": "Liberté de manifester."
                    },
                    {
                        "id": "politics-question7-choice2",
                        "text": "Liberté de conscience."
                    },
                    {
                        "id": "politics-question7-choice3",
                        "text": "Liberté de consommer."
                    },
                    {
                        "id": "politics-question7-choice4",
                        "text": "Liberté de voyager."
                    },
                    {
                        "id": "politics-question7-choice5",
                        "text": "Tous les choix ci-dessus."
                    }
                ],
                "correctChoice": "politics-question7-choice5"
            },
            {
                "id": "politics-question8",
                "text": "Pensez-vous que la liberté d'expression est absolue ?",
                "choices": [
                    {
                        "id": "politics-question8-choice1",
                        "text": "Oui, totalement."
                    },
                    {
                        "id": "politics-question8-choice2",
                        "text": "Non, jamais."
                    },
                    {
                        "id": "politics-question8-choice3",
                        "text": "Oui, mais seulement en privé."
                    },
                    {
                        "id": "politics-question8-choice4",
                        "text": "Non, la liberté est garantie mais elle n'est pas absolue."
                    }
                ],
                "correctChoice": "politics-question8-choice4"
            },
            {
                "id": "politics-question9",
                "text": "Quels sont les droits et devoirs du citoyen français ?",
                "choices": [
                    {
                        "id": "politics-question9-choice1",
                        "text": "Payer les impôts."
                    },
                    {
                        "id": "politics-question9-choice2",
                        "text": "Respecter la loi et les droits des autres citoyens."
                    },
                    {
                        "id": "politics-question9-choice3",
                        "text": "Créer des associations."
                    },
                    {
                        "id": "politics-question9-choice4",
                        "text": "Tous les choix ci-dessus."
                    }
                ],
                "correctChoice": "politics-question9-choice4"
            },
            {
                "id": "politics-question10",
                "text": "Quels sont les symboles de la République française ?",
                "choices": [
                    {
                        "id": "politics-question10-choice1",
                        "text": "Le drapeau rouge."
                    },
                    {
                        "id": "politics-question10-choice2",
                        "text": "Le hibou."
                    },
                    {
                        "id": "politics-question10-choice3",
                        "text": "Le coq."
                    },
                    {
                        "id": "politics-question10-choice4",
                        "text": "Le trident."
                    }
                ],
                "correctChoice": "politics-question10-choice3"
            },
            {
                "id": "politics-question11",
                "text": "Quels sont les couleurs du drapeau français ?",
                "choices": [
                    {
                        "id": "politics-question11-choice1",
                        "text": "Vert, blanc, rouge."
                    },
                    {
                        "id": "politics-question11-choice2",
                        "text": "Bleu, blanc, rouge."
                    },
                    {
                        "id": "politics-question11-choice3",
                        "text": "Bleu, jaune, rouge."
                    },
                    {
                        "id": "politics-question11-choice4",
                        "text": "Noir, blanc, rouge."
                    }
                ],
                "correctChoice": "politics-question11-choice2"
            },
            {
                "id": "politics-question12",
                "text": "Que représentent les couleurs du drapeau français ?",
                "choices": [
                    {
                        "id": "politics-question12-choice1",
                        "text": "Le bleu représente la mer."
                    },
                    {
                        "id": "politics-question12-choice2",
                        "text": "Le blanc représente la paix."
                    },
                    {
                        "id": "politics-question12-choice3",
                        "text": "Le rouge représente la révolution."
                    },
                    {
                        "id": "politics-question12-choice4",
                        "text": "Le bleu représente la couleur de Paris."
                    }
                ],
                "correctChoice": "politics-question12-choice4"
            },
            {
                "id": "politics-question13",
                "text": "Qui est Marianne ?",
                "choices": [
                    {
                        "id": "politics-question13-choice1",
                        "text": "Une reine française."
                    },
                    {
                        "id": "politics-question13-choice2",
                        "text": "Une figure symbolique de la République française."
                    },
                    {
                        "id": "politics-question13-choice3",
                        "text": "Une écrivaine célèbre."
                    },
                    {
                        "id": "politics-question13-choice4",
                        "text": "Une politicienne."
                    }
                ],
                "correctChoice": "politics-question13-choice2"
            },
            {
                "id": "politics-question14",
                "text": "Qui est aujourd'hui le président de la République ?",
                "choices": [
                    {
                        "id": "politics-question14-choice1",
                        "text": "François Hollande."
                    },
                    {
                        "id": "politics-question14-choice2",
                        "text": "Emmanuel Macron."
                    },
                    {
                        "id": "politics-question14-choice3",
                        "text": "Nicolas Sarkozy."
                    },
                    {
                        "id": "politics-question14-choice4",
                        "text": "Jacques Chirac."
                    }
                ],
                "correctChoice": "politics-question14-choice2"
            },
            {
                "id": "politics-question15",
                "text": "Qui était président de la République avant lui ?",
                "choices": [
                    {
                        "id": "politics-question15-choice1",
                        "text": "Nicolas Sarkozy."
                    },
                    {
                        "id": "politics-question15-choice2",
                        "text": "Jacques Chirac."
                    },
                    {
                        "id": "politics-question15-choice3",
                        "text": "François Hollande."
                    },
                    {
                        "id": "politics-question15-choice4",
                        "text": "Valéry Giscard d'Estaing."
                    }
                ],
                "correctChoice": "politics-question15-choice3"
            },
            {
                "id": "politics-question16",
                "text": "Qui est le premier ministre actuel ?",
                "choices": [
                    {
                        "id": "politics-question16-choice1",
                        "text": "Jean Castex."
                    },
                    {
                        "id": "politics-question16-choice2",
                        "text": "Gabriel Attal."
                    },
                    {
                        "id": "politics-question16-choice3",
                        "text": "Édouard Philippe."
                    },
                    {
                        "id": "politics-question16-choice4",
                        "text": "Elisabeth Borne."
                    }
                ],
                "correctChoice": "politics-question16-choice2"
            },
            {
                "id": "politics-question17",
                "text": "Qui était premier ministre avant lui ?",
                "choices": [
                    {
                        "id": "politics-question17-choice1",
                        "text": "Édouard Philippe."
                    },
                    {
                        "id": "politics-question17-choice2",
                        "text": "Dominique de Villepin."
                    },
                    {
                        "id": "politics-question17-choice3",
                        "text": "Elisabeth Borne."
                    },
                    {
                        "id": "politics-question17-choice4",
                        "text": "Jean Castex."
                    }
                ],
                "correctChoice": "politics-question17-choice3"
            },
            {
                "id": "politics-question18",
                "text": "Dans quelle république sommes-nous aujourd'hui ?",
                "choices": [
                    {
                        "id": "politics-question18-choice1",
                        "text": "IIe République."
                    },
                    {
                        "id": "politics-question18-choice2",
                        "text": "IVe République."
                    },
                    {
                        "id": "politics-question18-choice3",
                        "text": "Ve République."
                    },
                    {
                        "id": "politics-question18-choice4",
                        "text": "VIe République."
                    }
                ],
                "correctChoice": "politics-question18-choice3"
            },
            {
                "id": "politics-question19",
                "text": "Quand sont les dates des précédentes républiques ?",
                "choices": [
                    {
                        "id": "politics-question19-choice1",
                        "text": "1792 à 1804, 1848 à 1852, 1870 à 1940, 1946 à 1958."
                    },
                    {
                        "id": "politics-question19-choice2",
                        "text": "1792 à 1804, 1848 à 1852, 1870 à 1945, 1946 à 1958."
                    },
                    {
                        "id": "politics-question19-choice3",
                        "text": "1789 à 1799, 1848 à 1852, 1870 à 1945, 1946 à 1958."
                    },
                    {
                        "id": "politics-question19-choice4",
                        "text": "1792 à 1804, 1848 à 1852, 1870 à 1940, 1945 à 1958."
                    }
                ],
                "correctChoice": "politics-question19-choice1"
            },
            {
                "id": "politics-question20",
                "text": "Qui a instauré la cinquième république ?",
                "choices": [
                    {
                        "id": "politics-question20-choice1",
                        "text": "Charles de Gaulle."
                    },
                    {
                        "id": "politics-question20-choice2",
                        "text": "François Mitterrand."
                    },
                    {
                        "id": "politics-question20-choice3",
                        "text": "Jacques Chirac."
                    },
                    {
                        "id": "politics-question20-choice4",
                        "text": "Valéry Giscard d'Estaing."
                    }
                ],
                "correctChoice": "politics-question20-choice1"
            },
            {
                "id": "politics-question21",
                "text": "Où se trouve le siège de la présidence de la République ?",
                "choices": [
                    {
                        "id": "politics-question21-choice1",
                        "text": "L'Élysée."
                    },
                    {
                        "id": "politics-question21-choice2",
                        "text": "Matignon."
                    },
                    {
                        "id": "politics-question21-choice3",
                        "text": "L'Assemblée nationale."
                    },
                    {
                        "id": "politics-question21-choice4",
                        "text": "Le Sénat."
                    }
                ],
                "correctChoice": "politics-question21-choice1"
            },
            {
                "id": "politics-question22",
                "text": "Citer dans l'ordre les présidents de la Ve République.",
                "choices": [
                    {
                        "id": "politics-question22-choice1",
                        "text": "François Mitterrand, Emmanuel Macron, Charles de Gaulle, Georges Pompidou, Valéry Giscard d'Estaing, Nicolas Sarkozy, François Hollande, Jacques Chirac"
                    },
                    {
                        "id": "politics-question22-choice2",
                        "text": "Charles de Gaulle, Georges Pompidou, Valéry Giscard d'Estaing, François Mitterrand, Nicolas Sarkozy, Emmanuel Macron, Jacques Chirac, François Hollande"
                    },
                    {
                        "id": "politics-question22-choice3",
                        "text": "Valéry Giscard d'Estaing, François Hollande, Georges Pompidou, François Mitterrand, Emmanuel Macron, Nicolas Sarkozy, Jacques Chirac, Charles de Gaulle"
                    },
                    {
                        "id": "politics-question22-choice4",
                        "text": "Charles de Gaulle, Georges Pompidou, Valéry Giscard d'Estaing, François Mitterrand, Jacques Chirac, Nicolas Sarkozy, François Hollande, Emmanuel Macron"
                    }
                ],
                "correctChoice": "politics-question22-choice4"
            },
            {
                "id": "politics-question23",
                "text": "Citer trois anciens premiers ministres français de la Ve République.",
                "choices": [
                    {
                        "id": "politics-question23-choice1",
                        "text": "Dominique de Villepin, Alain Juppé, Élisabeth Borne."
                    },
                    {
                        "id": "politics-question23-choice2",
                        "text": "Édouard Philippe, Jean Castex, Bernard Cazeneuve."
                    },
                    {
                        "id": "politics-question23-choice3",
                        "text": "Manuel Valls, Lionel Jospin, Jean-Pierre Raffarin."
                    },
                    {
                        "id": "politics-question23-choice4",
                        "text": "Édouard Balladur, Laurent Fabius, Michel Rocard."
                    },
                    {
                        "id": "politics-question23-choice5",
                        "text": "Tous les choix ci-dessus."
                    }
                ],
                "correctChoice": "politics-question23-choice5"
            },
            {
                "id": "politics-question24",
                "text": "Citer trois ministres du gouvernement actuel.",
                "choices": [
                    {
                        "id": "politics-question24-choice1",
                        "text": "Gérald Darmanin, Bruno Le Maire, Eric Dupont-Moretti."
                    },
                    {
                        "id": "politics-question24-choice2",
                        "text": "Jean-Yves Le Drian, Florence Parly, Barbara Pompili."
                    },
                    {
                        "id": "politics-question24-choice3",
                        "text": "Olivier Véran, Roselyne Bachelot, Jean-Michel Blanquer."
                    },
                    {
                        "id": "politics-question24-choice4",
                        "text": "Éric Woerth, Frédérique Vidal, Sébastien Lecornu."
                    }
                ],
                "correctChoice": "politics-question24-choice1"
            },
            {
                "id": "politics-question25",
                "text": "Pour combien de temps est élu le président de la République ?",
                "choices": [
                    {
                        "id": "politics-question25-choice1",
                        "text": "4 ans."
                    },
                    {
                        "id": "politics-question25-choice2",
                        "text": "6 ans."
                    },
                    {
                        "id": "politics-question25-choice3",
                        "text": "5 ans."
                    },
                    {
                        "id": "politics-question25-choice4",
                        "text": "7 ans."
                    }
                ],
                "correctChoice": "politics-question25-choice3"
            },
            {
                "id": "politics-question26",
                "text": "Par quel scrutin et pour combien de mandats peut être élu le président de la République ?",
                "choices": [
                    {
                        "id": "politics-question26-choice1",
                        "text": "Suffrage universel indirect, un mandat de 6 ans."
                    },
                    {
                        "id": "politics-question26-choice2",
                        "text": "Suffrage universel direct, un mandat de 5 ans."
                    },
                    {
                        "id": "politics-question26-choice3",
                        "text": "Suffrage universel indirect, un mandat de 5 ans."
                    },
                    {
                        "id": "politics-question26-choice4",
                        "text": "Suffrage universel direct, un mandat de 4 ans."
                    }
                ],
                "correctChoice": "politics-question26-choice2"
            },
            {
                "id": "politics-question27",
                "text": "Qui a le droit de voter aux élections ?",
                "choices": [
                    {
                        "id": "politics-question27-choice1",
                        "text": "Tout citoyen français."
                    },
                    {
                        "id": "politics-question27-choice2",
                        "text": "Tout résident français."
                    },
                    {
                        "id": "politics-question27-choice3",
                        "text": "Tout adulte français."
                    },
                    {
                        "id": "politics-question27-choice4",
                        "text": "Tout étranger résidant en France depuis plus de 5 ans."
                    }
                ],
                "correctChoice": "politics-question27-choice1"
            },
            {
                "id": "politics-question28",
                "text": "Quel est l'âge de la majorité en France ?",
                "choices": [
                    {
                        "id": "politics-question28-choice1",
                        "text": "16 ans."
                    },
                    {
                        "id": "politics-question28-choice2",
                        "text": "18 ans."
                    },
                    {
                        "id": "politics-question28-choice3",
                        "text": "21 ans."
                    },
                    {
                        "id": "politics-question28-choice4",
                        "text": "20 ans."
                    }
                ],
                "correctChoice": "politics-question28-choice2"
            },
            {
                "id": "politics-question29",
                "text": "Qu'est-ce que le Parlement ?",
                "choices": [
                    {
                        "id": "politics-question29-choice1",
                        "text": "Une assemblée élue par le peuple."
                    },
                    {
                        "id": "politics-question29-choice2",
                        "text": "Une institution religieuse."
                    },
                    {
                        "id": "politics-question29-choice3",
                        "text": "Un organe exécutif."
                    },
                    {
                        "id": "politics-question29-choice4",
                        "text": "Un conseil des ministres."
                    }
                ],
                "correctChoice": "politics-question29-choice1"
            },
            {
                "id": "politics-question30",
                "text": "Quel est le rôle exact du Parlement ?",
                "choices": [
                    {
                        "id": "politics-question30-choice1",
                        "text": "Mettre en œuvre les lois et conduire la politique nationale."
                    },
                    {
                        "id": "politics-question30-choice2",
                        "text": "Voter les lois et contrôler l'action du gouvernement."
                    },
                    {
                        "id": "politics-question30-choice3",
                        "text": "Nommer le Premier ministre et le président de la République."
                    },
                    {
                        "id": "politics-question30-choice4",
                        "text": "Contrôler les élections."
                    }
                ],
                "correctChoice": "politics-question30-choice2"
            },
            {
                "id": "politics-question31",
                "text": "Citer les différentes institutions politiques en France.",
                "choices": [
                    {
                        "id": "politics-question31-choice1",
                        "text": "Le pouvoir exécutif, le pouvoir judiciaire et le pouvoir administratif."
                    },
                    {
                        "id": "politics-question31-choice2",
                        "text": "Le pouvoir exécutif, le pouvoir législatif et le pouvoir judiciaire."
                    },
                    {
                        "id": "politics-question31-choice3",
                        "text": "Le pouvoir politique, le pouvoir législatif et le pouvoir judiciaire."
                    },
                    {
                        "id": "politics-question31-choice4",
                        "text": "Le pouvoir exécutif, le pouvoir législatif et le pouvoir populaire."
                    }
                ],
                "correctChoice": "politics-question31-choice2"
            },
            {
                "id": "politics-question32",
                "text": "Qu'est-ce que le pouvoir exécutif et quel est son rôle ?",
                "choices": [
                    {
                        "id": "politics-question32-choice1",
                        "text": "Il édicte des règlements et dispose de l'administration."
                    },
                    {
                        "id": "politics-question32-choice2",
                        "text": "Il révise et adopte les lois."
                    },
                    {
                        "id": "politics-question32-choice3",
                        "text": "Il contrôle l'application de la loi."
                    },
                    {
                        "id": "politics-question32-choice4",
                        "text": "Il se prononce sur la constitutionnalité des lois."
                    }
                ],
                "correctChoice": "politics-question32-choice1"
            },
            {
                "id": "politics-question33",
                "text": "Qu'est-ce que le pouvoir législatif et quel est son rôle ?",
                "choices": [
                    {
                        "id": "politics-question33-choice1",
                        "text": "Il édicte des règlements et dispose de l'administration."
                    },
                    {
                        "id": "politics-question33-choice2",
                        "text": "Il révise et adopte les lois."
                    },
                    {
                        "id": "politics-question33-choice3",
                        "text": "Il contrôle l'application de la loi."
                    },
                    {
                        "id": "politics-question33-choice4",
                        "text": "Il se prononce sur la constitutionnalité des lois."
                    }
                ],
                "correctChoice": "politics-question33-choice2"
            },
            {
                "id": "politics-question34",
                "text": "Qu'est-ce que le pouvoir judiciaire et quel est son rôle ?",
                "choices": [
                    {
                        "id": "politics-question34-choice1",
                        "text": "Il édicte des règlements et dispose de l'administration."
                    },
                    {
                        "id": "politics-question34-choice2",
                        "text": "Il révise et adopte les lois."
                    },
                    {
                        "id": "politics-question34-choice3",
                        "text": "Il contrôle l'application de la loi."
                    },
                    {
                        "id": "politics-question34-choice4",
                        "text": "Il se prononce sur la constitutionnalité des lois."
                    }
                ],
                "correctChoice": "politics-question34-choice3"
            },
            {
                "id": "politics-question35",
                "text": "Comment sont élus les députés ?",
                "choices": [
                    {
                        "id": "politics-question35-choice1",
                        "text": "Au suffrage universel direct uninominal majoritaire à deux tours."
                    },
                    {
                        "id": "politics-question35-choice2",
                        "text": "Au suffrage universel direct proportionnel."
                    },
                    {
                        "id": "politics-question35-choice3",
                        "text": "Par un collège de grands électeurs."
                    },
                    {
                        "id": "politics-question35-choice4",
                        "text": "Par désignation du président de la République."
                    }
                ],
                "correctChoice": "politics-question35-choice1"
            },
            {
                "id": "politics-question36",
                "text": "Qui est le président ou la présidente de l'Assemblée nationale ?",
                "choices": [
                    {
                        "id": "politics-question36-choice1",
                        "text": "Gérard Larcher."
                    },
                    {
                        "id": "politics-question36-choice2",
                        "text": "Édouard Philippe."
                    },
                    {
                        "id": "politics-question36-choice3",
                        "text": "Yaël Braun-Pivet."
                    },
                    {
                        "id": "politics-question36-choice4",
                        "text": "Emmanuel Macron."
                    }
                ],
                "correctChoice": "politics-question36-choice3"
            },
            {
                "id": "politics-question37",
                "text": "Combien d'années dure son mandat ?",
                "choices": [
                    {
                        "id": "politics-question37-choice1",
                        "text": "3 ans."
                    },
                    {
                        "id": "politics-question37-choice2",
                        "text": "4 ans."
                    },
                    {
                        "id": "politics-question37-choice3",
                        "text": "5 ans."
                    },
                    {
                        "id": "politics-question37-choice4",
                        "text": "6 ans."
                    }
                ],
                "correctChoice": "politics-question37-choice3"
            },
            {
                "id": "politics-question38",
                "text": "Qu'est-ce que la Chambre basse ?",
                "choices": [
                    {
                        "id": "politics-question38-choice1",
                        "text": "Le Sénat."
                    },
                    {
                        "id": "politics-question38-choice2",
                        "text": "Le Conseil constitutionnel."
                    },
                    {
                        "id": "politics-question38-choice3",
                        "text": "L'Assemblée nationale."
                    },
                    {
                        "id": "politics-question38-choice4",
                        "text": "Le Parlement."
                    }
                ],
                "correctChoice": "politics-question38-choice3"
            },
            {
                "id": "politics-question39",
                "text": "Qu'est-ce que la Chambre haute ?",
                "choices": [
                    {
                        "id": "politics-question39-choice1",
                        "text": "Le Sénat."
                    },
                    {
                        "id": "politics-question39-choice2",
                        "text": "Le Conseil constitutionnel."
                    },
                    {
                        "id": "politics-question39-choice3",
                        "text": "L'Assemblée nationale."
                    },
                    {
                        "id": "politics-question39-choice4",
                        "text": "Le Parlement."
                    }
                ],
                "correctChoice": "politics-question39-choice1"
            },
            {
                "id": "politics-question40",
                "text": "Qu'est-ce que le Sénat ?",
                "choices": [
                    {
                        "id": "politics-question40-choice1",
                        "text": "La Chambre basse du Parlement."
                    },
                    {
                        "id": "politics-question40-choice2",
                        "text": "La Chambre haute du Parlement."
                    },
                    {
                        "id": "politics-question40-choice3",
                        "text": "L'Assemblée nationale."
                    },
                    {
                        "id": "politics-question40-choice4",
                        "text": "Le Conseil constitutionnel."
                    }
                ],
                "correctChoice": "politics-question40-choice2"
            },
            {
                "id": "politics-question41",
                "text": "Comment sont élus les sénateurs ?",
                "choices": [
                    {
                        "id": "politics-question41-choice1",
                        "text": "Au suffrage universel direct."
                    },
                    {
                        "id": "politics-question41-choice2",
                        "text": "Au suffrage universel indirect."
                    },
                    {
                        "id": "politics-question41-choice3",
                        "text": "Par désignation du président de la République."
                    },
                    {
                        "id": "politics-question41-choice4",
                        "text": "Par désignation du Premier ministre."
                    }
                ],
                "correctChoice": "politics-question41-choice2"
            },
            {
                "id": "politics-question42",
                "text": "Pour combien d'années sont élus les sénateurs ?",
                "choices": [
                    {
                        "id": "politics-question42-choice1",
                        "text": "4 ans."
                    },
                    {
                        "id": "politics-question42-choice2",
                        "text": "5 ans."
                    },
                    {
                        "id": "politics-question42-choice3",
                        "text": "6 ans."
                    },
                    {
                        "id": "politics-question42-choice4",
                        "text": "7 ans."
                    }
                ],
                "correctChoice": "politics-question42-choice3"
            },
            {
                "id": "politics-question43",
                "text": "Quelle est la différence entre un député et un sénateur ?",
                "choices": [
                    {
                        "id": "politics-question43-choice1",
                        "text": "Les sénateurs siègent à l'Assemblée nationale, tandis que les députés siègent au Sénat."
                    },
                    {
                        "id": "politics-question43-choice2",
                        "text": "Les sénateurs représentent les collectivités territoriales, tandis que les députés représentent la population."
                    },
                    {
                        "id": "politics-question43-choice3",
                        "text": "Les députés sont élus au suffrage universel direct, tandis que les sénateurs sont élus au suffrage universel indirect."
                    },
                    {
                        "id": "politics-question43-choice4",
                        "text": "Les sénateurs sont élus pour un mandat de cinq ans, tandis que les députés sont élus pour un mandat de six ans."
                    }
                ],
                "correctChoice": "politics-question43-choice3"
            },
            {
                "id": "politics-question44",
                "text": "Constitutionnellement, qui a le pouvoir de diriger le pays si le président de la République décède ?",
                "choices": [
                    {
                        "id": "politics-question44-choice1",
                        "text": "Le Premier ministre."
                    },
                    {
                        "id": "politics-question44-choice2",
                        "text": "Le président du Sénat."
                    },
                    {
                        "id": "politics-question44-choice3",
                        "text": "Le président de l'Assemblée nationale."
                    },
                    {
                        "id": "politics-question44-choice4",
                        "text": "Le Conseil constitutionnel."
                    }
                ],
                "correctChoice": "politics-question44-choice2"
            },
            {
                "id": "politics-question45",
                "text": "Qui est le président actuel du Sénat ?",
                "choices": [
                    {
                        "id": "politics-question45-choice1",
                        "text": "Gérard Larcher."
                    },
                    {
                        "id": "politics-question45-choice2",
                        "text": "Laurent Fabius."
                    },
                    {
                        "id": "politics-question45-choice3",
                        "text": "Élisabeth Borne."
                    },
                    {
                        "id": "politics-question45-choice4",
                        "text": "Yaël Braun-Pivet."
                    }
                ],
                "correctChoice": "politics-question45-choice1"
            },
            {
                "id": "politics-question46",
                "text": "Qu'est-ce que le Conseil constitutionnel ?",
                "choices": [
                    {
                        "id": "politics-question46-choice1",
                        "text": "Une assemblée élue par le peuple chargée de contrôler l'action du gouvernement."
                    },
                    {
                        "id": "politics-question46-choice2",
                        "text": "Une institution qui se prononce sur la conformité des lois à la constitution."
                    },
                    {
                        "id": "politics-question46-choice3",
                        "text": "Le pouvoir judiciaire suprême."
                    },
                    {
                        "id": "politics-question46-choice4",
                        "text": "Une institution religieuse."
                    }
                ],
                "correctChoice": "politics-question46-choice2"
            },
            {
                "id": "politics-question47",
                "text": "Qui est le président du Conseil constitutionnel ?",
                "choices": [
                    {
                        "id": "politics-question47-choice1",
                        "text": "Gérard Larcher."
                    },
                    {
                        "id": "politics-question47-choice2",
                        "text": "Laurent Fabius."
                    },
                    {
                        "id": "politics-question47-choice3",
                        "text": "Jean Castex."
                    },
                    {
                        "id": "politics-question47-choice4",
                        "text": "Emmanuel Macron."
                    }
                ],
                "correctChoice": "politics-question47-choice2"
            },
            {
                "id": "politics-question48",
                "text": "Quelle est la dernière loi votée à l'Assemblée nationale ?",
                "choices": [
                    {
                        "id": "politics-question48-choice1",
                        "text": "La loi sur l'éducation."
                    },
                    {
                        "id": "politics-question48-choice2",
                        "text": "La loi sur l'environnement."
                    },
                    {
                        "id": "politics-question48-choice3",
                        "text": "La loi renforçant la sécurité et la protection des maires et des élus locaux."
                    },
                    {
                        "id": "politics-question48-choice4",
                        "text": "La loi sur la santé."
                    }
                ],
                "correctChoice": "politics-question48-choice3"
            },
            {
                "id": "politics-question49",
                "text": "Savez-vous ce qu'est la cohabitation politique ?",
                "choices": [
                    {
                        "id": "politics-question49-choice1",
                        "text": "La coexistence institutionnelle entre un chef de l'État et un chef du gouvernement, issus de la majorité parlementaire."
                    },
                    {
                        "id": "politics-question49-choice2",
                        "text": "L'harmonie entre les différents partis politiques."
                    },
                    {
                        "id": "politics-question49-choice3",
                        "text": "La coexistence de différentes cultures politiques au sein d'un même gouvernement."
                    },
                    {
                        "id": "politics-question49-choice4",
                        "text": "L'alliance entre le gouvernement et l'opposition."
                    }
                ],
                "correctChoice": "politics-question49-choice1"
            },
            {
                "id": "politics-question50",
                "text": "Citez un exemple de cohabitation politique en France.",
                "choices": [
                    {
                        "id": "politics-question50-choice1",
                        "text": "De Gaulle et Pompidou."
                    },
                    {
                        "id": "politics-question50-choice2",
                        "text": "Mitterrand, Chirac, Jospin."
                    },
                    {
                        "id": "politics-question50-choice3",
                        "text": "Sarkozy et Hollande."
                    },
                    {
                        "id": "politics-question50-choice4",
                        "text": "Macron et Philippe."
                    }
                ],
                "correctChoice": "politics-question50-choice2"
            },
            {
                "id": "politics-question51",
                "text": "Qui nomme les ministres ?",
                "choices": [
                    {
                        "id": "politics-question51-choice1",
                        "text": "Le président de la République."
                    },
                    {
                        "id": "politics-question51-choice2",
                        "text": "Le Premier ministre."
                    },
                    {
                        "id": "politics-question51-choice3",
                        "text": "Le Parlement."
                    },
                    {
                        "id": "politics-question51-choice4",
                        "text": "Le Conseil constitutionnel."
                    }
                ],
                "correctChoice": "politics-question51-choice2"
            },
            {
                "id": "politics-question52",
                "text": "Qui nomme le Premier ministre de la France ?",
                "choices": [
                    {
                        "id": "politics-question52-choice1",
                        "text": "Le président de la République."
                    },
                    {
                        "id": "politics-question52-choice2",
                        "text": "Le Parlement."
                    },
                    {
                        "id": "politics-question52-choice3",
                        "text": "Le Conseil constitutionnel."
                    },
                    {
                        "id": "politics-question52-choice4",
                        "text": "Le Sénat."
                    }
                ],
                "correctChoice": "politics-question52-choice1"
            },
            {
                "id": "politics-question53",
                "text": "Où se trouvent les bureaux du Premier ministre ?",
                "choices": [
                    {
                        "id": "politics-question53-choice1",
                        "text": "À l'Élysée."
                    },
                    {
                        "id": "politics-question53-choice2",
                        "text": "À Matignon."
                    },
                    {
                        "id": "politics-question53-choice3",
                        "text": "À l'Hôtel de Ville."
                    },
                    {
                        "id": "politics-question53-choice4",
                        "text": "À l'Assemblée nationale."
                    }
                ],
                "correctChoice": "politics-question53-choice2"
            },
            {
                "id": "politics-question54",
                "text": "Qui est le maire de votre ville ?",
                "choices": [
                    {
                        "id": "politics-question54-choice1",
                        "text": "Jean-Pierre Durand."
                    },
                    {
                        "id": "politics-question54-choice2",
                        "text": "Marie Dupont."
                    },
                    {
                        "id": "politics-question54-choice3",
                        "text": "Si vous n'avez pas la réponse à cette question, cherchez vite le nom de votre maire sur Internet."
                    },
                    {
                        "id": "politics-question54-choice4",
                        "text": "Jacques Martin."
                    }
                ],
                "correctChoice": "politics-question54-choice3"
            },
            {
                "id": "politics-question55",
                "text": "Qu'est-ce que les élections municipales ?",
                "choices": [
                    {
                        "id": "politics-question55-choice1",
                        "text": "Des élections qui permettent d'élire les membres du conseil municipal de chaque commune."
                    },
                    {
                        "id": "politics-question55-choice2",
                        "text": "Des élections qui permettent d'élire les députés."
                    },
                    {
                        "id": "politics-question55-choice3",
                        "text": "Des élections qui permettent d'élire les sénateurs."
                    },
                    {
                        "id": "politics-question55-choice4",
                        "text": "Des élections qui permettent d'élire le président de la République."
                    }
                ],
                "correctChoice": "politics-question55-choice1"
            },
            {
                "id": "politics-question56",
                "text": "Quelle est l'hymne de la France ?",
                "choices": [
                    {
                        "id": "politics-question56-choice1",
                        "text": "La Marseillaise."
                    },
                    {
                        "id": "politics-question56-choice2",
                        "text": "La Marseillaise des enfants."
                    },
                    {
                        "id": "politics-question56-choice3",
                        "text": "La Liberté guidant le peuple."
                    },
                    {
                        "id": "politics-question56-choice4",
                        "text": "La Carmagnole."
                    }
                ],
                "correctChoice": "politics-question56-choice1"
            },
            {
                "id": "politics-question57",
                "text": "Qui a écrit la Marseillaise ?",
                "choices": [
                    {
                        "id": "politics-question57-choice1",
                        "text": "Jean-Jacques Rousseau."
                    },
                    {
                        "id": "politics-question57-choice2",
                        "text": "Victor Hugo."
                    },
                    {
                        "id": "politics-question57-choice3",
                        "text": "Claude Joseph Rouget de Lisle."
                    },
                    {
                        "id": "politics-question57-choice4",
                        "text": "Voltaire."
                    }
                ],
                "correctChoice": "politics-question57-choice3"
            },
            {
                "id": "politics-question58",
                "text": "Connaissez-vous le premier couplet de la Marseillaise ?",
                "choices": [
                    {
                        "id": "politics-question58-choice1",
                        "text": "Oui."
                    },
                    {
                        "id": "politics-question58-choice2",
                        "text": "Non."
                    },
                    {
                        "id": "politics-question58-choice3",
                        "text": "Parfois."
                    },
                    {
                        "id": "politics-question58-choice4",
                        "text": "Je ne sais pas."
                    }
                ],
                "correctChoice": "politics-question58-choice1"
            },
            {
                "id": "politics-question59",
                "text": "À quelle occasion la Marseillaise a-t-elle été écrite ?",
                "choices": [
                    {
                        "id": "politics-question59-choice1",
                        "text": "À la fête nationale."
                    },
                    {
                        "id": "politics-question59-choice2",
                        "text": "Lors de la révolution française."
                    },
                    {
                        "id": "politics-question59-choice3",
                        "text": "Lors de la guerre franco-allemande."
                    },
                    {
                        "id": "politics-question59-choice4",
                        "text": "À la fin de la Première Guerre mondiale."
                    }
                ],
                "correctChoice": "politics-question59-choice2"
            }
        ]
    }
]

export default quizzes
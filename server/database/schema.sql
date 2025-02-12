create table user (
  id int unsigned primary key auto_increment not null,
  name varchar(100) not null unique,
  email varchar(255) not null unique,
  password varchar(255) not null,
  is_admin BOOLEAN NOT NULL DEFAULT FALSE

);

create table film (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null,
  year int not null,
  style varchar(100) not null,
  description varchar(300) not null,
  picture varchar(255) not null
);

create table favoris (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
  user_id INT UNSIGNED,
  film_id INT UNSIGNED,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
  FOREIGN KEY (film_id) REFERENCES film(id) ON DELETE CASCADE
);

INSERT INTO user (id, name, email, password, is_admin)  
VALUES  
  (1, 'ShadowFox', 'shadowfox@mail.com', '123456', false),  
  (2, 'CyberWolf', 'cyberwolf@mail.com', 'password1', false),  
  (3, 'NeonTiger', 'neontiger@mail.com', 'securepass', false),  
  (4, 'GhostRider', 'ghostrider@mail.com', 'pass123', false),  
  (5, 'PixelNinja', 'pixelninja@mail.com', 'mypassword', false),  
  (6, 'DarkPhoenix', 'darkphoenix@mail.com', 'testpass', false),  
  (7, 'QuantumBlade', 'quantumblade@mail.com', 'letmein', false),  
  (8, 'StormBreaker', 'stormbreaker@mail.com', 'hello123', false),  
  (9, 'NightHawk', 'nighthawk@mail.com', 'adminpass', true),  
  (10, 'FrostByte', 'frostbyte@mail.com', 'qwerty123', false); 


INSERT INTO film (id, title, year, style, description, picture)  
VALUES  
  (2, "Coherence", "2013", "Science-Fiction", "Lorsqu'une comète passe près de la Terre, un groupe d'amis réuni pour un dîner voit la réalité se déformer autour d'eux. Ce thriller psychologique joue avec la perception du spectateur jusqu'à la dernière seconde.", '/assets/images/coherence.jpg'),  

  (3, "The Man from Earth", "2007", "Science-Fiction", "Un professeur d'université révèle à ses collègues qu'il est en réalité un homme immortel vivant depuis plus de 14 000 ans. Une conversation captivante où la science et la philosophie se mélangent.", '/assets/images/manfromearth.jpg'),  

  (4, "Triangle", "2009", "Horreur/Thriller", "Un groupe de personnes se retrouve bloqué sur un paquebot abandonné après un accident en mer. Très vite, ils réalisent qu'un phénomène temporel les piège dans une boucle sans fin.", '/assets/images/triangle.jpg'),  

  (5, "Timecrimes", "2007", "Thriller/Science-Fiction", "Un homme découvre une machine à voyager dans le temps et se retrouve coincé dans une série d'événements de plus en plus complexes et inquiétants. Un puzzle temporel fascinant.", '/assets/images/timecrimes.jpg'),  

  (6, "Primer", "2004", "Science-Fiction", "Deux ingénieurs découvrent accidentellement le voyage dans le temps et tentent de l'exploiter. Leur découverte va vite leur échapper, créant un enchevêtrement de réalités et de paradoxes.", '/assets/images/primer.jpg'),  

  (7, "Moon", "2009", "Drame/Science-Fiction", "Un employé isolé sur une station lunaire commence à remettre en question sa réalité après une étrange découverte. Un film touchant et intelligent porté par une performance magistrale de Sam Rockwell.", '/assets/images/moon.jpg'),  

  (8, "Take Shelter", "2011", "Drame/Thriller", "Un homme est hanté par des visions apocalyptiques et décide de construire un abri pour protéger sa famille. Mais souffre-t-il de paranoïa ou ses cauchemars sont-ils une prémonition ?", '/assets/images/takeshelter.jpg'),  

  (9, "Banshee Chapter", "2013", "Horreur/Thriller", "Une journaliste enquête sur une drogue expérimentale secrète liée aux expériences de la CIA et découvre une vérité terrifiante qui dépasse l'entendement.", '/assets/images/bansheechapter.jpg'),  

  (10, "Enemy", "2013", "Thriller/Psychologique", "Un professeur découvre un homme identique à lui dans un film et devient obsédé par lui. Ce thriller troublant et symbolique, signé Denis Villeneuve, est un véritable casse-tête psychologique.", '/assets/images/enemy.jpg'),  

  (11, "The Autopsy of Jane Doe", "2016", "Horreur/Mystère", "Un père et son fils médecins légistes sont confrontés à des phénomènes surnaturels terrifiants lorsqu'ils tentent de découvrir la cause du décès d'une femme inconnue.", '/assets/images/autopsyofjanedoe.jpg');  




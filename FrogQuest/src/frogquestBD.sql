create table pergunta(
id int PRIMARY KEY,
conteudo varchar(100) not null,
url_Img varchar(100)
)

create table resposta(
id int AUTO_INCREMENT PRIMARY KEY,
resp varchar(100) NOT NULL,
correta CHARACTER not null,
IdPergunta int,
FOREIGN KEY (IdPergunta) REFERENCES pergunta(id)
)

INSERT INTO pergunta VALUES (1, "18+7", null)
INSERT INTO pergunta VALUES (2, "16-9", null)
INSERT INTO pergunta VALUES (3, "20 x 1", null)
INSERT INTO pergunta VALUES (4, "Qual forma é esta?", null)
INSERT INTO pergunta VALUES (5, "Qual das opções diz respeito a uma forma de seis lados?", null)
INSERT INTO pergunta VALUES (6, "20-11", null)
INSERT INTO pergunta VALUES (7, "13+16", null)
INSERT INTO pergunta VALUES (8, "9/3", null)
INSERT INTO pergunta VALUES (9, "21 + 3 - 10", null)

insert into resposta values(1, '25', 1, 'S')
insert into resposta values(2, '28', 1, 'N')
insert into resposta values(3, '35', 1, 'N')
insert into resposta values(4, '15', 1, 'N')
insert into resposta values(5, '27', 1, 'N')
insert into resposta values(6, '29', 1, 'N')

insert into resposta values(7, '7', 2, 'S')
insert into resposta values(8, '9', 2, 'N')
insert into resposta values(9, '5', 2, 'N')
insert into resposta values(10, '25', 2, 'N')
insert into resposta values(11, '17', 2, 'N')
insert into resposta values(12, '8', 2, 'N')

insert into resposta values(13, '20',3, 'S')
insert into resposta values(14, '21', 3, 'N')
insert into resposta values(15, '40', 3, 'N')
insert into resposta values(16, '10', 3, 'N')
insert into resposta values(17, '15', 3, 'N')
insert into resposta values(18, '19', 3, 'N')

insert into resposta values(19, 'Pentágono', 4, 'S')
insert into resposta values(20, 'Quadrado', 4, 'N')
insert into resposta values(21, 'Pentagrama', 4, 'N')
insert into resposta values(22, 'Triângulo', 4, 'N')
insert into resposta values(23, 'Círculo', 4, 'N')
insert into resposta values(24, 'Hexágono', 4, 'N')

insert into resposta values(25, 'Hexágono', 5, 'S')
insert into resposta values(26, 'Quadrado', 5, 'N')
insert into resposta values(27, 'Pentágono', 5, 'N')
insert into resposta values(28, 'Triângulo', 5, 'N')
insert into resposta values(29, 'Heptágono', 5, 'N')
insert into resposta values(30, 'Octágono', 5, 'N')

insert into resposta values(31, '9', 6, 'S')
insert into resposta values(32, '10', 6, 'N')
insert into resposta values(33, '21', 6, 'N')
insert into resposta values(34, '8', 6, 'N')
insert into resposta values(35, '31', 6, 'N')
insert into resposta values(36, '11', 6, 'N')

insert into resposta values(37, '29', 7, 'S')
insert into resposta values(38, '30', 7, 'N')
insert into resposta values(39, '31', 7, 'N')
insert into resposta values(40,'25', 7, 'N')
insert into resposta values(41, '19', 7, 'N')
insert into resposta values(42, '35', 7, 'N')

insert into resposta values(43, '3', 8, 'S')
insert into resposta values(44, '12', 8, 'N')
insert into resposta values(45, '6', 8, 'N')
insert into resposta values(46,'9', 8, 'N')
insert into resposta values(47, '5', 8, 'N')
insert into resposta values(48, '1', 8, 'N')

insert into resposta values(49, '14', 9, 'S')
insert into resposta values(50, '24', 9, 'N')
insert into resposta values(51, '11', 9, 'N')
insert into resposta values(52, '15', 9, 'N')
insert into resposta values(53, '21', 9, 'N')
insert into resposta values(54, '16', 9, 'N')
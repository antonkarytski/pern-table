const { Pool } = require("pg");
const connectionString = process.env.DATABASE_URL;
const pool = new Pool({ connectionString });

(async () => {
  try {
    pool.connect();
    await pool.query(
      `${"create table pern_table (" + "id INT,"}name VARCHAR(50),
date DATE,
distance INT,
quantity INT
);
insert into pern_table (id, name, date, distance, quantity) values (1, 'Aeriel', '6/28/1998', 3284, 19);
insert into pern_table (id, name, date, distance, quantity) values (2, 'Durant', '1/9/2018', 3424, 17);
insert into pern_table (id, name, date, distance, quantity) values (3, 'Gisele', '2/21/2019', 1805, 36);
insert into pern_table (id, name, date, distance, quantity) values (4, 'Goraud', '6/7/2003', 3000, 36);
insert into pern_table (id, name, date, distance, quantity) values (5, 'Lars', '2/12/2013', 2969, 24);
insert into pern_table (id, name, date, distance, quantity) values (6, 'Sheree', '5/16/2012', 1893, 32);
insert into pern_table (id, name, date, distance, quantity) values (7, 'Brittney', '2/1/2020', 1683, 21);
insert into pern_table (id, name, date, distance, quantity) values (8, 'Olive', '3/11/2014', 2620, 28);
insert into pern_table (id, name, date, distance, quantity) values (9, 'Cassy', '4/17/2004', 3956, 43);
insert into pern_table (id, name, date, distance, quantity) values (10, 'Connie', '2/5/2001', 1886, 7);
insert into pern_table (id, name, date, distance, quantity) values (11, 'Silvester', '3/20/2000', 2674, 43);
insert into pern_table (id, name, date, distance, quantity) values (12, 'Harrietta', '11/21/2017', 1914, 33);
insert into pern_table (id, name, date, distance, quantity) values (13, 'Edward', '9/29/1998', 3702, 32);
insert into pern_table (id, name, date, distance, quantity) values (14, 'Cecil', '10/3/2003', 3162, 44);
insert into pern_table (id, name, date, distance, quantity) values (15, 'Stephie', '8/30/2001', 2915, 28);
insert into pern_table (id, name, date, distance, quantity) values (16, 'Bastian', '2/3/2004', 3274, 28);
insert into pern_table (id, name, date, distance, quantity) values (17, 'Germaine', '5/24/2012', 3066, 26);
insert into pern_table (id, name, date, distance, quantity) values (18, 'Idelle', '4/3/2017', 3781, 29);
insert into pern_table (id, name, date, distance, quantity) values (19, 'Lacee', '3/27/2002', 3166, 39);
insert into pern_table (id, name, date, distance, quantity) values (20, 'Esmeralda', '4/19/1997', 2992, 27);
insert into pern_table (id, name, date, distance, quantity) values (21, 'Collie', '12/28/1998', 3474, 30);
insert into pern_table (id, name, date, distance, quantity) values (22, 'Loralee', '7/10/2011', 1497, 39);
insert into pern_table (id, name, date, distance, quantity) values (23, 'Carlotta', '1/16/2020', 2720, 43);
insert into pern_table (id, name, date, distance, quantity) values (24, 'Skell', '7/18/1998', 1128, 24);
insert into pern_table (id, name, date, distance, quantity) values (25, 'Margy', '7/20/2019', 3361, 35);
insert into pern_table (id, name, date, distance, quantity) values (26, 'Fitzgerald', '9/20/2013', 2013, 18);
insert into pern_table (id, name, date, distance, quantity) values (27, 'Denys', '8/26/1997', 2727, 15);
insert into pern_table (id, name, date, distance, quantity) values (28, 'Oralla', '9/10/2010', 4437, 24);
insert into pern_table (id, name, date, distance, quantity) values (29, 'Josiah', '4/11/2010', 2979, 14);
insert into pern_table (id, name, date, distance, quantity) values (30, 'Taryn', '5/12/1998', 4300, 33);
insert into pern_table (id, name, date, distance, quantity) values (31, 'Tracey', '6/27/2014', 1381, 43);
insert into pern_table (id, name, date, distance, quantity) values (32, 'Wilhelmina', '5/11/2002', 2210, 37);
insert into pern_table (id, name, date, distance, quantity) values (33, 'Karita', '11/5/2002', 2278, 22);
insert into pern_table (id, name, date, distance, quantity) values (34, 'Guillemette', '1/30/2000', 845, 40);
insert into pern_table (id, name, date, distance, quantity) values (35, 'Emilee', '4/5/1998', 4023, 32);
insert into pern_table (id, name, date, distance, quantity) values (36, 'Benjy', '4/18/2004', 4203, 34);
insert into pern_table (id, name, date, distance, quantity) values (37, 'Bernice', '12/21/2010', 1970, 52);
insert into pern_table (id, name, date, distance, quantity) values (38, 'Ingeborg', '6/11/1998', 2514, 40);
insert into pern_table (id, name, date, distance, quantity) values (39, 'Sibby', '11/16/2010', 3635, 34);
insert into pern_table (id, name, date, distance, quantity) values (40, 'Deloria', '3/28/2009', 3637, 28);
insert into pern_table (id, name, date, distance, quantity) values (41, 'Sandy', '1/26/2000', 4140, 27);
insert into pern_table (id, name, date, distance, quantity) values (42, 'Ludovico', '1/11/2015', 3257, 43);
insert into pern_table (id, name, date, distance, quantity) values (43, 'Weylin', '8/4/2017', 4289, 11);
insert into pern_table (id, name, date, distance, quantity) values (44, 'Neila', '5/2/2010', 4037, 25);
insert into pern_table (id, name, date, distance, quantity) values (45, 'Franciska', '10/20/2005', 1817, 23);
insert into pern_table (id, name, date, distance, quantity) values (46, 'Currey', '5/15/2010', 3525, 27);
insert into pern_table (id, name, date, distance, quantity) values (47, 'Louisette', '7/23/2003', 3868, 26);
insert into pern_table (id, name, date, distance, quantity) values (48, 'Sukey', '4/1/2000', 2063, 30);
insert into pern_table (id, name, date, distance, quantity) values (49, 'Ambros', '8/30/2007', 3753, 32);
insert into pern_table (id, name, date, distance, quantity) values (50, 'Ethelred', '5/1/2015', 2003, 34);
insert into pern_table (id, name, date, distance, quantity) values (51, 'Hube', '2/21/1996', 3964, 26);
insert into pern_table (id, name, date, distance, quantity) values (52, 'Jaclin', '3/26/2003', 4591, 32);
insert into pern_table (id, name, date, distance, quantity) values (53, 'Lorrie', '9/18/2007', 1769, 49);
insert into pern_table (id, name, date, distance, quantity) values (54, 'Alisander', '5/29/2010', 3336, 33);
insert into pern_table (id, name, date, distance, quantity) values (55, 'Collie', '1/23/2012', 2109, 37);
insert into pern_table (id, name, date, distance, quantity) values (56, 'Binky', '9/16/2003', 1352, 29);
insert into pern_table (id, name, date, distance, quantity) values (57, 'Earle', '10/17/2017', 2372, 20);
insert into pern_table (id, name, date, distance, quantity) values (58, 'Veda', '9/16/2008', 2759, 22);
insert into pern_table (id, name, date, distance, quantity) values (59, 'Celeste', '2/11/1996', 3117, 34);
insert into pern_table (id, name, date, distance, quantity) values (60, 'Golda', '9/22/2016', 2404, 24);
insert into pern_table (id, name, date, distance, quantity) values (61, 'Dorris', '2/15/1996', 3792, 26);
insert into pern_table (id, name, date, distance, quantity) values (62, 'Josiah', '6/26/2003', 2510, 39);
insert into pern_table (id, name, date, distance, quantity) values (63, 'Jonathon', '11/14/2004', 2593, 9);
insert into pern_table (id, name, date, distance, quantity) values (64, 'Lesly', '4/2/2021', 1957, 13);
insert into pern_table (id, name, date, distance, quantity) values (65, 'Jayme', '9/23/2000', 4626, 23);
insert into pern_table (id, name, date, distance, quantity) values (66, 'Fons', '12/20/2005', 1577, 44);
insert into pern_table (id, name, date, distance, quantity) values (67, 'Josh', '11/9/2009', 2435, 29);
insert into pern_table (id, name, date, distance, quantity) values (68, 'Leanna', '8/5/2006', 3128, 33);
insert into pern_table (id, name, date, distance, quantity) values (69, 'Ikey', '11/3/2009', 3439, 34);
insert into pern_table (id, name, date, distance, quantity) values (70, 'Nestor', '12/3/2008', 3548, 39);
insert into pern_table (id, name, date, distance, quantity) values (71, 'Winnah', '12/24/2011', 5102, 52);
insert into pern_table (id, name, date, distance, quantity) values (72, 'Norrie', '9/12/2003', 2706, 45);
insert into pern_table (id, name, date, distance, quantity) values (73, 'Justina', '6/22/2002', 1649, 45);
insert into pern_table (id, name, date, distance, quantity) values (74, 'Beverley', '10/9/1996', 1780, 27);
insert into pern_table (id, name, date, distance, quantity) values (75, 'Sada', '1/15/1996', 1859, 29);
insert into pern_table (id, name, date, distance, quantity) values (76, 'Dulci', '12/28/1998', 3799, 21);
insert into pern_table (id, name, date, distance, quantity) values (77, 'Reid', '6/16/2004', 2778, 28);
insert into pern_table (id, name, date, distance, quantity) values (78, 'Ev', '8/17/2004', 3366, 25);
insert into pern_table (id, name, date, distance, quantity) values (79, 'Brier', '5/6/2015', 3377, 7);
insert into pern_table (id, name, date, distance, quantity) values (80, 'Olenolin', '8/17/1996', 4050, 12);
insert into pern_table (id, name, date, distance, quantity) values (81, 'Judith', '4/14/2010', 2824, 18);
insert into pern_table (id, name, date, distance, quantity) values (82, 'Martin', '3/26/2000', 2747, 34);
insert into pern_table (id, name, date, distance, quantity) values (83, 'Zaneta', '8/20/2000', 3430, 46);
insert into pern_table (id, name, date, distance, quantity) values (84, 'Kaine', '9/27/1998', 2888, 44);
insert into pern_table (id, name, date, distance, quantity) values (85, 'Dierdre', '7/22/2020', 3961, 34);
insert into pern_table (id, name, date, distance, quantity) values (86, 'Darrelle', '3/16/2021', 3371, 36);
insert into pern_table (id, name, date, distance, quantity) values (87, 'Leann', '2/21/2018', 3183, 33);
insert into pern_table (id, name, date, distance, quantity) values (88, 'Lazar', '8/27/2007', 3668, 31);
insert into pern_table (id, name, date, distance, quantity) values (89, 'Reed', '10/2/1998', 4150, 35);
insert into pern_table (id, name, date, distance, quantity) values (90, 'Sherri', '8/16/1997', 4136, 34);
insert into pern_table (id, name, date, distance, quantity) values (91, 'Reinhold', '11/1/2010', 2814, 35);
insert into pern_table (id, name, date, distance, quantity) values (92, 'Shannen', '12/14/2020', 2080, 28);
insert into pern_table (id, name, date, distance, quantity) values (93, 'Ward', '3/31/2020', 2030, 40);
insert into pern_table (id, name, date, distance, quantity) values (94, 'Elyssa', '12/30/2004', 4192, 42);
`
    );
    console.log("DONE");
  } catch (e) {
    console.log(e);
  }
})();

module.exports = pool;

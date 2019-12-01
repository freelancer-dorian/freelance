-- exe1.1
CREATE TABLE Addressbook (
 regist_no INTEGER   NOT NULL,
 name  VARCHAR(128) NOT NULL,
 address  VARCHAR(256) NOT NULL,
 tel_no  CHAR(10)  NULL,
 mail_addr CHAR(20)  NULL,
 postal_code CHAR(8) NOT NULL, 
 PRIMARY KEY (Regist_no)
);

-- exe 1.2
ALTER TABLE Addressbook ADD COLUMN postal_code CHAR(8) NOT NULL;

-- exe 1.3
DROP TABLE Addressbook;


-- 1.SELECT子句→2.FROM子句→3.WHERE子句→4.GROUP BY子句→ 5. HAVING 子句 → 6. ORDER BY 子句


-- exe5.1
CREATE VIEW View_5_1 (product_name, sale_price, regist_date) AS SELECT product_name, sale_price, regist_date FROM Product
WHERE sale_price >= 1000 AND regist_date = '2009-09-20';

-- exe5.3
SELECT product_id, product_name, product_type, sale_price, (SELECT AVG(sale_price) FROM Product) AS sale_price_all FROM Product;

-- exe5.4
CREATE VIEW AvgPriceByType (product_id,product_name, product_type, sale_price, avg_sale_price) AS 
SELECT product_id,product_name, product_type, sale_price, (SELECT AVG(sale_price) FROM Product AS P2 WHERE P1.product_type = P2.product_type GROUP BY product_type) as avg_sale_price FROM Product AS P1;



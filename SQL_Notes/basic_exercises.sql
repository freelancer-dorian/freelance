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



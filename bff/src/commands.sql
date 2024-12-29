SHOW DATABASES;
-- +--------------------+
-- | Database           |
-- +--------------------+
-- | dukan              |
-- | information_schema |
-- | mysql              |
-- | performance_schema |
-- | sys                |
-- +--------------------+

USE dukan;
-- Reading table information for completion of table and column names
-- You can turn off this feature to get a quicker startup with -A

-- Database changed

SHOW TABLES;
-- +-----------------+
-- | Tables_in_dukan |
-- +-----------------+
-- | address         |
-- | products        |
-- | user            |
-- | user_groups     |
-- | users           |
-- +-----------------+
-- 5 rows in set (0.01 sec)

DESCRIBE address;
-- +---------------+--------------+------+-----+---------+----------------+
-- | Field         | Type         | Null | Key | Default | Extra          |
-- +---------------+--------------+------+-----+---------+----------------+
-- | id            | int          | NO   | PRI | NULL    | auto_increment |
-- | address_line1 | varchar(255) | NO   |     | NULL    |                |
-- | address_line2 | varchar(255) | NO   |     | NULL    |                |
-- | country       | varchar(255) | NO   |     | NULL    |                |
-- | state         | varchar(255) | NO   |     | NULL    |                |
-- | city          | varchar(255) | NO   |     | NULL    |                |
-- | postcode      | varchar(255) | NO   |     | NULL    |                |
-- +---------------+--------------+------+-----+---------+----------------+
-- 7 rows in set (0.02 sec)

DESCRIBE products;
-- +-------------------+--------------+------+-----+----------------------+--------------------------------------------------+
-- | Field             | Type         | Null | Key | Default              | Extra                                            |
-- +-------------------+--------------+------+-----+----------------------+--------------------------------------------------+
-- | createddate       | datetime(6)  | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED                                |
-- | updatedate        | datetime(6)  | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED on update CURRENT_TIMESTAMP(6) |
-- | id                | varchar(36)  | NO   | PRI | NULL                 |                                                  |
-- | name              | varchar(255) | NO   |     | NULL                 |                                                  |
-- | sku               | varchar(255) | NO   |     | NULL                 |                                                  |
-- | description       | varchar(255) | NO   |     | NULL                 |                                                  |
-- | short_description | varchar(255) | NO   |     | NULL                 |                                                  |
-- +-------------------+--------------+------+-----+----------------------+--------------------------------------------------+
-- 7 rows in set (0.00 sec)

DESCRIBE user;
-- +--------------+--------------+------+-----+---------+----------------+
-- | Field        | Type         | Null | Key | Default | Extra          |
-- +--------------+--------------+------+-----+---------+----------------+
-- | id           | int          | NO   | PRI | NULL    | auto_increment |
-- | usergroup_id | int          | NO   |     | NULL    |                |
-- | address_id   | int          | NO   |     | NULL    |                |
-- | email        | varchar(255) | NO   |     | NULL    |                |
-- | password     | varchar(255) | NO   |     | NULL    |                |
-- | full_name    | varchar(255) | NO   |     | NULL    |                |
-- | createddate  | datetime     | NO   |     | NULL    |                |
-- | updatedate   | datetime     | NO   |     | NULL    |                |
-- +--------------+--------------+------+-----+---------+----------------+
-- 8 rows in set (0.00 sec)

DESCRIBE user_groups;
-- +--------------------------------+-------------+------+-----+---------+----------------+
-- | Field                          | Type        | Null | Key | Default | Extra          |
-- +--------------------------------+-------------+------+-----+---------+----------------+
-- | id                             | int         | NO   | PRI | NULL    | auto_increment |
-- | groupname                      | varchar(45) | NO   |     | NULL    |                |
-- | full_admin_access              | tinyint     | NO   |     | 0       |                |
-- | product_update_admin_access    | tinyint     | NO   |     | 0       |                |
-- | transaction_details_previledge | tinyint     | NO   |     | 0       |                |
-- | disacount_update_access        | tinyint     | NO   |     | 0       |                |
-- | full_customer_access           | tinyint     | NO   |     | 1       |                |
-- | partial_blocked_customer       | tinyint     | NO   |     | 0       |                |
-- | fully_blocked_customer         | tinyint     | NO   |     | 0       |                |
-- +--------------------------------+-------------+------+-----+---------+----------------+
-- 9 rows in set (0.00 sec)

DESCRIBE users;
-- +--------------+--------------+------+-----+---------+----------------+
-- | Field        | Type         | Null | Key | Default | Extra          |
-- +--------------+--------------+------+-----+---------+----------------+
-- | id           | int          | NO   | PRI | NULL    | auto_increment |
-- | usergroup_id | int          | NO   |     | NULL    |                |
-- | address_id   | int          | NO   |     | NULL    |                |
-- | email        | varchar(255) | NO   |     | NULL    |                |
-- | full_name    | varchar(255) | NO   |     | NULL    |                |
-- | createddate  | datetime     | NO   |     | NULL    |                |
-- | updatedate   | datetime     | NO   |     | NULL    |                |
-- | password     | varchar(255) | NO   |     | NULL    |                |
-- +--------------+--------------+------+-----+---------+----------------+
-- 8 rows in set (0.01 sec)

ALTER TABLE products
discount DECIMAL(2, 2) NOT NULL DEFAULT 0.00,
    ADD COLUMN max_order_units INT    
    ADD COLUMN price DECIMAL(13, 2) NOT NULL DEFAULT 0.00,
    ADD COLUMN discount DECIMAL(2, 2) NOT NULL DEFAULT 0.00,
    ADD COLUMN max_order_units INT NOT NULL DEFAULT 0,
    ADD COLUMN stock_left INT NOT NULL DEFAULT 100
    AFTER short_description;
-- Query OK, 0 rows affected (0.11 sec)
-- Records: 0  Duplicates: 0  Warnings: 0

DESCRIBE products;
-- +-------------------+---------------+------+-----+----------------------+--------------------------------------------------+
-- | Field             | Type          | Null | Key | Default              | Extra                                            |
-- +-------------------+---------------+------+-----+----------------------+--------------------------------------------------+
-- | createddate       | datetime(6)   | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED                                |
-- | updatedate        | datetime(6)   | NO   |     | CURRENT_TIMESTAMP(6) | DEFAULT_GENERATED on update CURRENT_TIMESTAMP(6) |
-- | id                | varchar(36)   | NO   | PRI | NULL                 |                                                  |
-- | name              | varchar(255)  | NO   |     | NULL                 |                                                  |
-- | sku               | varchar(255)  | NO   |     | NULL                 |                                                  |
-- | description       | varchar(255)  | NO   |     | NULL                 |                                                  |
-- | short_description | varchar(255)  | NO   |     | NULL                 |                                                  |
-- | stock_left        | int           | NO   |     | 100                  |                                                  |
-- | price             | decimal(13,2) | NO   |     | 0.00                 |                                                  |
-- | discount          | decimal(2,2)  | NO   |     | 0.00                 |                                                  |
-- | max_order_units   | int           | NO   |     | 0                    |                                                  |
-- +-------------------+---------------+------+-----+----------------------+--------------------------------------------------+
-- 11 rows in set (0.01 sec)

SELECT * FROM products;
-- +----------------------------+----------------------------+--------------------------------------+--------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------+------------+-------+----------+-----------------+
-- | createddate                | updatedate                 | id                                   | name               | sku         | description                                                                                                                                                                                                                       | short_description                                        | stock_left | price | discount | max_order_units |
-- +----------------------------+----------------------------+--------------------------------------+--------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------+------------+-------+----------+-----------------+
-- | 2024-11-24 00:00:00.000000 | 2024-12-28 22:46:43.304000 | 14f6773f-345b-4c71-9b21-49d02025ebd9 | Samsung Galaxy P45 | MZ8NB0AAP45 | The description                                                                                                                                                                                                                   | The description                                          |        100 | 10000 |        0 |               0 |
-- | 2021-08-13 00:00:00.000000 | 2024-12-28 22:49:33.264000 | 1a42d00e-4314-46a8-a6cc-d6f1a2b3544f | Samsung Galaxy M51 | RZ8NB0AA3FA | <ul class="a-unordered-list a-vertical a-spacing-mini">  <li class="a-spacing-mini"><span class="a-list-item"> Monster Durability &amp; Display : Corning Gorilla Glass Victus+, 16.83 Centimeters (6.6"Inch) Super AMOLED Displa | short                                                    |        100 |  1900 |        0 |               0 |
-- | 2021-08-13 00:00:00.000000 | 2024-12-28 22:50:11.212000 | e0c9c1f9-b198-4f25-9e35-8a3d0f02f2c5 | Samsung Galaxy A81 | AZ8NB0AA4GB | This is the full description of the Samsung Galaxy A51                                                                                                                                                                            | This is the short description for the Samsung Galaxy A51 |        100 | 23454 |        0 |               0 |
-- +----------------------------+----------------------------+--------------------------------------+--------------------+-------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+----------------------------------------------------------+------------+-------+----------+-----------------+
-- 3 rows in set (0.00 sec)

CREATE TABLE cart (
    id VARCHAR(36) NOT NULL,
    cart_type ENUM("buy_now", "saved") NOT NULL DEFAULT "buy_now",
    expiry_number INT NOT NULL DEFAULT 0,
    expiry_unit ENUM("DAYS", "WEEKS", "MONTHS", "YEARS") DEFAULT "MONTHS",
    active ENUM("YES_ACTIVE", "NO_ITS_EXPIRED", "NO_ITS_ORDERED") DEFAULT "YES_ACTIVE", 
    createddate DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id)
);
-- Query OK, 0 rows affected (0.11 sec)

CREATE TABLE cart_details  (
    id VARCHAR(36) NOT NULL,
    user_id INT,
    cart_id VARCHAR(36),
    product_id VARCHAR(36),
    quantity INT NOT NULL DEFAULT 1,
    total_price DECIMAL NOT NULL DEFAULT 0,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (cart_id) REFERENCES cart(id),
    FOREIGN KEY (product_id) REFERENCES products(id)
);
-- Query OK, 0 rows affected (0.07 sec)

CREATE TABLE orders (
    id VARCHAR(36) NOT NULL,
    cart_id VARCHAR(36),
    total_price DECIMAL DEFAULT 0,
    ordered_datetime DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    tentative_delivery DATETIME(6),
    PRIMARY KEY (id),
    FOREIGN KEY (cart_id) REFERENCES cart(id)
);
-- Query OK, 0 rows affected (0.05 sec)

CREATE TABLE transactions (
    id VARCHAR(36) NOT NULL,
    order_id VARCHAR(36),
    payment_mode ENUM("credit_card", "debit_card", "wallet", "cash") NOT NULL DEFAULT "cash",
    bank VARCHAR(128),
    transaction_date_time DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    PRIMARY KEY (id),
    FOREIGN KEY (order_id) REFERENCES orders(id)
);
-- Query OK, 0 rows affected (0.05 sec)
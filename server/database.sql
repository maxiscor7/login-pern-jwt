CREATE DATABASE jwttutorial;

--set extension  ******        create extension if not exists "uuid-ossp";
CREATE TABLE users(
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_name VARCHAR(255) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_password VARCHAR(255) NOT NULL
);

-- insert fake users

INSERT INTO users (user_name, user_email, user_password) VALUES ('maxi', 'maxi_cor@hotmail.com', 'kth18822' );
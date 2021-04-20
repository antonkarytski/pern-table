CREATE DATABASE perntable

CREATE TABLE distance{
    _id SERIAL PRIMARY_KEY,
    date DATE,
    name VARCHAR(255),
    quant INT,
    distance DOUBLE
}
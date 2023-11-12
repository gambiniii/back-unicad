CREATE TABLE "entrega"(
    "id" BIGINT NOT NULL,
    "endereco_id" BIGINT NOT NULL,
    "cliente_id" BIGINT NOT NULL,
    "status_id" BIGINT NOT NULL,
    "data_despacho" DATE NOT NULL,
    "data_entrega" DATE NOT NULL
);

ALTER TABLE "entrega"
ADD PRIMARY KEY("id");
CREATE INDEX "entrega_endereco_id_index" ON "entrega"("endereco_id");
CREATE INDEX "entrega_cliente_id_index" ON "entrega"("cliente_id");
CREATE INDEX "entrega_status_id_index" ON "entrega"("status_id");
CREATE TABLE "cliente"(
    "id" BIGINT NOT NULL,
    "nome" VARCHAR(255) NOT NULL
);

ALTER TABLE "cliente"
ADD PRIMARY KEY("id");
CREATE TABLE "endereco"(
    "id" BIGINT NOT NULL,
    "cliente_id" BIGINT NOT NULL,
    "cep" VARCHAR(255) NOT NULL,
    "estado" VARCHAR(255) NOT NULL,
    "cidade" VARCHAR(255) NOT NULL,
    "bairro" VARCHAR(255) NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "numero" VARCHAR(255) NOT NULL,
    "complemento" VARCHAR(255),
    "coordenada" VARCHAR(255) NOT NULL
);

ALTER TABLE "endereco"
ADD PRIMARY KEY("id");
CREATE INDEX "endereco_cliente_id_index" ON "endereco"("cliente_id");
CREATE TABLE "status"(
    "id" BIGINT NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "finalizado" BOOLEAN DEFAULT false NOT NULL
);

ALTER TABLE "status"
ADD PRIMARY KEY("id");
ALTER TABLE "endereco"
ADD CONSTRAINT "endereco_cliente_id_foreign" FOREIGN KEY("cliente_id") REFERENCES "cliente"("id");
ALTER TABLE "entrega"
ADD CONSTRAINT "entrega_endereco_id_foreign" FOREIGN KEY("endereco_id") REFERENCES "endereco"("id");
ALTER TABLE "entrega"
ADD CONSTRAINT "entrega_status_id_foreign" FOREIGN KEY("status_id") REFERENCES "status"("id");
ALTER TABLE "entrega"
ADD CONSTRAINT "entrega_cliente_id_foreign" FOREIGN KEY("cliente_id") REFERENCES "cliente"("id");
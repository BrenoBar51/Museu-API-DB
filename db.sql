INSERT INTO visitante (visitante_nome, visitante_idade, visitante_profissao, visitante_genero, visitante_cidade, visitante_bairro, visitante_cpf)
SELECT 
    temp.visitante_nome,
    temp.visitante_idade,
    temp.visitante_profissao,
    temp.visitante_genero,
    temp.visitante_cidade,
    CASE
        WHEN temp.visitante_cidade = 'Fortaleza' THEN
            CASE 
                WHEN RAND() < 0.25 THEN 'Centro'
                WHEN RAND() < 0.5 THEN 'Aldeota'
                WHEN RAND() < 0.75 THEN 'Parangaba'
                ELSE 'Papicu'
            END
        WHEN temp.visitante_cidade = 'Eusébio' THEN
            CASE 
                WHEN RAND() < 0.25 THEN 'Cidade Alpha'
                WHEN RAND() < 0.5 THEN 'Timbú'
                WHEN RAND() < 0.75 THEN 'Parque Hawai'
                ELSE 'Coité'
            END
        WHEN temp.visitante_cidade = 'São Paulo' THEN
            CASE 
                WHEN RAND() < 0.25 THEN 'Ibirapuera'
                WHEN RAND() < 0.5 THEN 'Ipiranga'
                WHEN RAND() < 0.75 THEN 'Liberdade'
                ELSE 'Sé'
            END
        WHEN temp.visitante_cidade = 'Maceió' THEN
            CASE 
                WHEN RAND() < 0.25 THEN 'Mutange'
                WHEN RAND() < 0.5 THEN 'Canaã'
                WHEN RAND() < 0.75 THEN 'Prado'
                ELSE 'Jatiúca'
            END
        ELSE
            CASE 
                WHEN RAND() < 0.25 THEN 'Copacabana'
                WHEN RAND() < 0.5 THEN 'Ipanema'
                WHEN RAND() < 0.75 THEN 'Leblon'
                ELSE 'Urca'
            END
    END as visitante_bairro,
    temp.visitante_cpf
FROM (
    SELECT 
        CASE 
            WHEN RAND() < 0.25 THEN 'João'
            WHEN RAND() < 0.5 THEN 'Maria'
            WHEN RAND() < 0.75 THEN 'Pedro'
            ELSE 'Ana'
        END as visitante_nome,
        FLOOR(RAND() * 80) + 18 as visitante_idade,
        CASE 
            WHEN RAND() < 0.3 THEN 'Engenheiro'
            WHEN RAND() < 0.6 THEN 'Professor'
            ELSE 'Estudante'
        END as visitante_profissao,
        CASE 
            WHEN 
                (CASE 
                    WHEN RAND() < 0.25 THEN 'João'
                    WHEN RAND() < 0.5 THEN 'Maria'
                    WHEN RAND() < 0.75 THEN 'Pedro'
                    ELSE 'Ana'
                END) IN ('João', 'Pedro') THEN 'Masculino'
            ELSE 'Feminino'
        END as visitante_genero,
        CASE
            WHEN RAND() < 0.1 THEN 'Fortaleza'
            WHEN RAND() < 0.8 THEN 'Eusébio'
            WHEN RAND() < 0.6 THEN 'São Paulo'
            WHEN RAND() < 0.7 THEN 'Maceió'
            ELSE 'Rio De Janeiro'
        END as visitante_cidade,
        CONCAT(FLOOR(RAND() * 900) + 100, '.', FLOOR(RAND() * 900) + 100, '.', FLOOR(RAND() * 900) + 100, '-', FLOOR(RAND() * 100) + 10) as visitante_cpf
    FROM 
        information_schema.tables
    LIMIT 10000
) AS temp;

SELECT COUNT(visitante_id) AS VALUE, visitante_bairro AS NAME FROM visitante WHERE visitante_cidade = 'Fortaleza' GROUP BY visitante_bairro;
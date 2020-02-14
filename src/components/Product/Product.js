import React from "react"
import "./Product.scss"

const Product = () => (
    <div className="row product">
        <div className="col-12 col-lg-4 product__img">
            <img src={`../../images/Logo_inst_darker.png`} className="product__img"/>
        </div>
        
        <div className="col-12 col-lg-8">
            <div className="row wrapper">
                <h2 className="col-12 product__title">Пакет "Lite"</h2>
            </div>
            
            <div className="row">
                <p className="col-12 col-lg-8 product__description">
                Базовый продукт, представляющий из себя решение для тех, кто хочет начать знакомство со сферой live-вилок и не видит необходимости в тренере.
                
                <h3>Что входит в пакет Lite?</h3>
                <ul>
                    <li>Файл с пошаговой инструкцией для начала работы с live-вилками</li>
                    <li>Приглашение в закрытую беседу для наших клиентов, в которой можно найти ответы на возникающие в процессе обучения и последующей работы вопросы, а также знакомства, которые могут пригодиться в дальнейшем</li>
                    <li>1 месяц индивидуальной поддержки после получения файла (лимит в 5 обращений)</li>
                </ul>

                </p>
                <div className="col-12 col-lg-4 product__price">
                    <span>2 990р</span>
                    <button className="button product__button" type="button">Добавить в корзину</button>
                </div>
            </div>


        </div>
        
    </div>
)

export default Product;
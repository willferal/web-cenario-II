import React from "react";
import "./Faq.css";
import copiei from "./assets/images/copiei.png";
import "./Home.css";







const Faq = props =>{
    return(
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-2"></div>
            <div class="interface col-sm-8 well well-md">
                <div class="row">
                    <h1>Como podemos te ajudar?</h1>
                </div>

                <div class="row" id="rowcenter">
                    <h3 class="faqPerguntas" data-toggle="collapse" data-target="#pergunta1">Não consigo redefinir a
                        senha</h3>
                    <div id="pergunta1" class="collapse faqRespostas">
                        <div class="col-sm-1"></div>
                        <div class="respostas col-sm-10 well well-sm">
                            <h3>Endereço de e-mail antigo?</h3>
                            <h4>Você precisa ter acesso ao endereço de e-mail cadastrado na sua conta do Spotify para
                                abrir o link de redefinição de senha que nós enviamos.</h4>
                            <h3>Caso você não tenha acesso, estas são algumas opções:</h3>
                            <h4>◉ Recupere o acesso ao endereço de e-mail, se possível.</h4>
                            <h4>◉ Crie uma <a href="forms.html">nova conta</a> e comece do zero.</h4>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                </div>
                <div class="row" id="rowcenter1">
                    <h3 class="faqPerguntas" data-toggle="collapse" data-target="#pergunta2">Formas de pagamento</h3>
                    <div id="pergunta2" class="collapse faqRespostas">
                        <div class="col-sm-1"></div>
                        <div class="respostas col-sm-10 well well-sm">
                            <h3>Você pode pagar pelo Spotify Premium de muitas maneiras:</h3>
                            <div class="listas panel panel-default">
                                <div class="itensLista panel-body">◉ Cartão de crédito/débito</div>
                                <div class="itensLista panel-body">◉ Cartões pré-pagos</div>
                                <div class="itensLista panel-body">◉ PayPal</div>
                                <div class="itensLista panel-body">◉ Vales-presente</div>
                                <div class="itensLista panel-body">◉ Pagamento móvel</div>
                                <div class="itensLista panel-body">◉ Plano pré-pago</div>
                            </div>
                            <h4><strong>Observação</strong>: os métodos variam de acordo com o país ou região.</h4>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                </div>
                <div class="row" id="rowcenter2">
                    <h3 class="faqPerguntas" data-toggle="collapse" data-target="#pergunta3">Assine ou entre num plano
                        Premium Família</h3>
                    <div id="pergunta3" class="collapse faqRespostas">
                        <div class="col-sm-1"></div>
                        <div class="respostas col-sm-10 well well-sm">
                            <h3>Premium Família:</h3>
                            <img src={copiei} alt="Copiei" />
                            <h4>O Premium Família é um plano com desconto para até 6 pessoas que moram juntas.</h4>
                            <h4>Cada um tem uma conta Premium, com senha própria e músicas salvas separadas. A cada 12
                                meses, os membros podem mudar de plano uma vez.</h4>
                            <h4><strong>Nota</strong>: não é possível mudar o administrador do plano.</h4>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>
                </div>
            </div>

            <div class="col-sm-2"></div>
        </div>

    </div>
    )
}
export default Faq
import React from "react";
import "./Home.css";




const Home = props => {
    return (
        <div>       
        <section>
            <div>
                <h2> Soptfy </h2>
                <p> Somos a mais nova plataforma de streaming de musicas,
                    venham conferir nossos planos de assinatura! ;)
                </p>

            </div>
        </section>
        
        <section>
            <div>
                <h2>Variedade de musicas!!</h2>
                <p> Escute em nossa plataforma: </p>
                <ul class="album-list">
                    <li>
                        <a target="_blank" rel="noreferrer" href="https://pt.wikipedia.org/wiki/Temple_of_Shadows" alt="Temple of shadows - Angra"> 
                            <img src="/assets/images/angra.png" alt="Angra"/>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Hail_to_the_King_%28Avenged_Sevenfold_album%29" alt="Hail to the king - A7X">
                            <img src="/assets/images/a7x.png" alt="A7x"/>
                        </a>
                    </li>

                    <li>
                        <a target="_blank" rel="noreferrer" href="https://pt.wikipedia.org/wsiki/Nada_como_um_Dia_ap%C3%B3s_o_Outro_Dia" alt="Nada como um dia após o outro dia - Racionais">
                            <img src="/assets/images/racionais.jpg" alt="Racionais"/>
                    </a>
                    </li>
                </ul>
                
                </div>
            </section>
            
            <section>
                <div>
                    <h2> Nossas redes sociais </h2>
                    <p> Nos sigam em nossas redes sociais! </p>
                    <ul class="socialMedias-list">
                        <li>
                            <a  target="_blank" rel="noreferrer" href="https://www.twitch.tv/" alt="Imagem da plataforma twitch">
                                <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.2824 25H15.8426C15.6011 25.0001 15.3678 25.0844 15.1852 25.2375L9.28125 30V25H6.1875C5.914 25 5.65169 24.8946 5.4583 24.7071C5.2649 24.5196 5.15625 24.2652 5.15625 24V6C5.15625 5.73478 5.2649 5.48043 5.4583 5.29289C5.65169 5.10536 5.914 5 6.1875 5H26.8125C27.086 5 27.3483 5.10536 27.5417 5.29289C27.7351 5.48043 27.8438 5.73478 27.8438 6V19.5375C27.8417 19.6832 27.8072 19.8267 27.7427 19.9583C27.6782 20.0899 27.5851 20.2065 27.4699 20.3L21.9398 24.7625C21.7572 24.9156 21.5239 24.9999 21.2824 25V25Z" stroke="#9A35FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M21.6562 11V17" stroke="#9A35FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M15.4688 11V17" stroke="#9A35FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" rel="noreferrer" href="https://twitter.com/" alt="Imagem da plataforma twitter">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 11C16 8.25003 18.3125 5.96253 21.0625 6.00003C22.0256 6.01115 22.9649 6.30018 23.7676 6.83237C24.5704 7.36457 25.2023 8.11728 25.5875 9.00003H30L25.9625 13.0375C25.7019 17.0932 23.9066 20.8975 20.9415 23.6769C17.9764 26.4562 14.0641 28.002 10 28C6 28 5 26.5 5 26.5C5 26.5 9 25 11 22C11 22 3 18 5 7.00003C5 7.00003 10 12 16 13V11Z" stroke="#2871FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>

                        <li>
                            <a target="_blank" rel="noreferrer" href="https://www.instagram.com" alt="Imagem da plataforma instagram">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21Z" stroke="#FA41FE" stroke-width="2" stroke-miterlimit="10" />
                                    <path d="M21.5 4.5H10.5C7.18629 4.5 4.5 7.18629 4.5 10.5V21.5C4.5 24.8137 7.18629 27.5 10.5 27.5H21.5C24.8137 27.5 27.5 24.8137 27.5 21.5V10.5C27.5 7.18629 24.8137 4.5 21.5 4.5Z" stroke="#FA41FE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M22.5 11C23.3284 11 24 10.3284 24 9.5C24 8.67157 23.3284 8 22.5 8C21.6716 8 21 8.67157 21 9.5C21 10.3284 21.6716 11 22.5 11Z" fill="#FA41FE" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            </div>
    )
}

export default Home
import 'bootstrap/dist/css/bootstrap.min.css';
import './featured.css';

let imgs = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh3.googleusercontent.com%2FEDnb6eGWwy1Rb3WonK_25r_7tdNcNt80X87fIC-vN4I5lj8RK5a75IaXwPNhxrCsGACC%3Dh900&f=1&nofb=1&ipt=47bb0c10faa26e7dc7b93cf1f17dfea3eb94afcce84942f8f45e5d330d3e68e8&ipo=images',
];

function Featured() {
    return (
        
            <div class="rbox">
                <h2 class="title">Featured</h2>
                <div class="content">
                    <div class="image-wrapper">
                    <img className='screenshotl' src={imgs[0]} alt='screenshot1'></img>
                    <img className='screenshotr' src={imgs[0]} alt='screenshot2'></img>
                            </div>
                            <div class="text">
                                <p>
                        As an avid movie enthusiast and aspiring developer,
                        I embarked on an exciting journey to build an app that would revolutionize the way
                        people access movie databases in real-time using Kotlin. With a passion for both
                        programming and cinema, I started by defining the app's scope and key features.
                        Armed with the Android Studio IDE and the powerful Kotlin programming language,
                        I began coding the app's frontend interface, ensuring an intuitive and user-friendly design.
                        Next, I integrated various APIs to fetch real-time data from popular movie databases,
                        making sure to optimize the app for efficient loading and minimal data usage.
                        Leveraging Kotlin's asynchronous capabilities, I implemented background tasks
                        to keep the app up-to-date with the latest movie information. Rigorous testing
                        and debugging phases followed, guaranteeing a seamless user experience.
                        The result was a remarkable app that brought real-time movie data to users'
                        fingertips, enriching their movie-watching experience like never before.
                                </p>
                            </div>
                    </div>
                </div> 
   
    );
}

export default Featured;
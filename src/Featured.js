import 'bootstrap/dist/css/bootstrap.min.css';
import './featured.css';

function Featured() {
    return (
        
            <div class="rbox">
                <h2 class="title">Featured</h2>
                <div class="content">
                    <div class="image-wrapper">
                    <img className='screenshotl' src={process.env.PUBLIC_URL + 'sc.png'} alt='screenshot1'></img>
                    <img className='screenshotr' src={process.env.PUBLIC_URL + 'sc1.png'} alt='screenshot2'></img>
                            </div>
                            <div class="text">
                                <p>
                        As a movie enthusiast and developer,
                        I thought it would be cool to blend two of my passions with an app.
                        Using Android Studio and Kotlin,
                        I began coding the app's frontend interface, ensuring an intuitive and user-friendly design.
                        Next, I integrated various APIs to fetch real-time data from popular movie databases,
                        making sure to optimize the app for efficient loading and minimal data usage.
                        Leveraging Kotlin's asynchronous capabilities, I implemented background tasks
                        to keep the app up-to-date with the latest movie information.
                        The result was an app that brought real-time movie data to users'
                        fingertips, enriching their movie-watching experience like never before.
                                </p>
                            </div>
                    </div>
                </div> 
   
    );
}

export default Featured;
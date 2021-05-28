import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function IndexPage() {
	const [message, setMessage] = useState(false); // set kondisi untuk pesan
	const [button, setButton]   = useState(false); // set kondisi untuk tombol 

	// Fungsi saat form di submit
	function sendEmail(e) {
		e.preventDefault();
	
		emailjs.sendForm('service_b3anjw3', 'template_h1tjlq1', e.target, 'user_ESzbr4bEyN1BOQUhQQFt1')
			.then((result) => {
				// Pesan yang muncul saat sukses
				setMessage( <div className="uk-alert-success uk-alert" id="form-result" uk-alert="true">
				  		<p>Your message has been sent!</p>
                          </div>)
                setButton("SEND MESSAGE")
			}, (error) => {
				// Pesan yang muncul saat error
				setMessage(<div className="uk-alert-danger uk-alert" id="form-result" uk-alert="true">
                    <p>{error.text}</p> 
                    </div>)
                setButton("SEND MESSAGE")

                console.log(eror)
			});
	  }  
    
    
    return (
    <>


                {message}

    <div className="uk-adg uk-padding-large">
       
        <div className="uk-aryaadg uk-card uk-padding uk-margin uk-align-center uk-card-default uk-card-body uk-width-1-2">
            <h3 className="uk-card-title uk-text-center">Pesan</h3>
        
            <form onSubmit={sendEmail} className="uk-form-stacked">

                <div className="uk-margin">
                    <label htmlFor="Name">Nama</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="from_name" name="from_name" type="text" placeholder="Nama"/>
                    </div>
                </div>

                <div className="uk-margin">
                    <label htmlFor="email">Email</label>
                    <div className="uk-form-controls">
                        <input className="uk-input" id="from_name" name="from_email" type="text" placeholder="Email"/>
                    </div>
                </div>

                <div className="uk-margin">
                    <label htmlFor="message">message</label>
                    <textarea className="uk-textarea" id="from_name" name="message" rows="5" placeholder="Subjek"></textarea>
                </div>

                <button className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom">{!button ? "SEND MESSAGE" : button}</button>

            </form>

           
           


            
    
        </div>
            

  




            
    </div>




    </>
	);
}

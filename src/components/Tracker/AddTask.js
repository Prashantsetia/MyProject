import { useState , useRef} from 'react';
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';

const AddTask = ({ onSave }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [mail, setMail] = useState('');

   

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task and date or close the form!'
            })
        } else if (!text && day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your task!'
            })
        } else if (text && !day) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Fill in your date!'
            })
        } else {
            onSave({ text, day, mail });
        }

        // ++++++++++++++++++++++++++++
        // var date = new Date();
        // var templateParams = {
        //     user_name: `Your last periods date was ${day}/${text}/${date.getFullYear()}`,
        //     user_email: `${mail}`,
        //     message:`You might get your periods in next 5 to 7 days....STAY HAPPY!! STAY SAFE!!`
        // };

        // alert("YOU DATA HAS BEEN SAVED, COME AND CHECK ANY TIME !!")
        // sendEmail(templateParams);

        // ++++++++++++++++++++++++++++

    }

     // +++++++++++++++++++++++++++++++++++++++++++++=
    //  const form = useRef();
    
    //  const sendEmail = (templateParams) => {
    //      // e.preventDefault();
    //      console.log("ma:", templateParams);
    //      setTimeout(() => {
    //         console.log("Yo: ", templateParams);
    //          emailjs.send('service_ttalep7', 'template_djeasod', templateParams, 'jq_mo9-s6-gN_mMP6')
    //          .then((result) => {
    //              console.log(result.text);
    //          }, (error) => {
    //              console.log(error.text);
    //          });

    //          setText('');
    //          setDay('');
    //          setMail('');
    //      }, 5000);
    //  };
     // +++++++++++++++++++++++++++++++++++++++++++++=

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Month, Year</label>
                <input type="text" placeholder="add month, Year" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date</label>
                <input type="text" placeholder="add date" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            {/* <div className="form-control">
                <label>Add email to Get Notication For Next Periods</label>
                <input type="text" placeholder="add email" value={mail} onChange={(e) => setMail(e.target.value)} />
            </div> */}

            <input type="submit" className="btn btni btn-block" value="Save" />
        </form>
    )
}

export default AddTask

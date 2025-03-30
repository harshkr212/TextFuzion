import React from 'react'


export default function About(props) {
    // const [myStyle,setMyStyle]=useState({
    //     color:'black',
    //     backgroundColor:'white'
    // });
    const textStyles = {
        light: {
          bg: 'white',
          text: 'black',
          button: 'secondary'
        },
        dark: {
          bg: '#12192e',
          text: 'white',
          button: 'primary'
        },
        success: {
          bg: 'green',
          text: '#E4EFE7',
          button: 'success'
        },
        danger: {
          bg: '#EDF4C2',
          text: 'grey',
          button: 'danger'
        }
      };
    // const mystyleColor=()=>{
    //     if(props.mode==='dark'){
    //         return 'white';
    //     }
    //     else if(props.mode==='success'){
    //         return '#E4EFE7';
    //     }
    //     else if(props.mode==='danger'){
    //         return 'grey';
    //     }
    //     else if(props.mode==='light'){
    //         return 'dark';
    //     }
    // }
    // const mystyleBackgroundColor=()=>{
    //     if(props.mode==='dark'){
    //         return 'grey';
    //     }
    //     else if(props.mode==='success'){
    //         return 'green';
    //     }
    //     else if(props.mode==='danger'){
    //         return '#EDF4C2'
    //     }
    //     else if(props.mode==='light'){
    //         return 'white';
    //     }

    // }
    const currentStyle=textStyles[props.mode]||textStyles['light'];
 
    return (
        <div className='container'>

            <h2>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={{color:currentStyle.text,backgroundColor:currentStyle.bg}} >
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={{color:currentStyle.text,backgroundColor:currentStyle.bg}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        About TextFuzion – Free Online Text Tools
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextFuzion is a 100% free online text manipulation tool designed for writers, coders, and professionals. Our web-based editor provides instant text transformations—including case conversion, whitespace removal, word counting and character counting—without requiring logins or downloads.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:currentStyle.text,backgroundColor:currentStyle.bg}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={{color:currentStyle.text,backgroundColor:currentStyle.bg}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Key Features
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Our toolkit includes essential utilities like case conversion, word/character counting, whitespace trimming, and text capitalization, along with niche tools like Markdown formatting and regex-based find/replace. Every feature is optimized for speed and accuracy, with real-time previews to visualize changes. Plus, the app’s dark/light themes and keyboard shortcuts ensure a seamless experience across devices.                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{color:currentStyle.text,backgroundColor:currentStyle.bg}}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={{color:currentStyle.text,backgroundColor:currentStyle.bg}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        🚀 Why Choose Us?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Unlike bloated word processors, TextFuzion focuses on simplicity and performance. All processing happens in your browser, keeping your data private and secure. Whether you’re drafting social media posts, debugging code, or prepping a report, TextFuzion helps you polish text faster—so you can focus on what matters. Try it today and see the difference!                        </div>
                    </div>
                </div>
                
            </div>
           
            
        </div>
    )
}

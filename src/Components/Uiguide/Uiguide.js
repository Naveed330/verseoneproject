import React from 'react';
import "./Uiguide.css";
import { Button } from "react-bootstrap";
import ui from "../assets/ui.png";
import sec3 from "../assets/sec3-grid.png";
import sec4 from "../assets/sec4-grid.png"
import sec5 from "../assets/sec5.png";
import sec6 from "../assets/sec6.png";
import sec7 from "../assets/sec7.png";

function Uiguide() {
    return (<>
        <section>
            <div className='ui-div'>
                <div className="container">
                    <p className='ui-content'>VerseOne Distribution Brand Guide</p>
                </div>
            </div>
            <div className='sec-2'>
                <div className="container">
                    <p className='ui-main-heading'>For Media Outlets and Partners</p>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='sec2-line'>Welcome to our partners’ guidelines and assets hub. We <br></br>
                                want to make it easy for you to interact with the VerseOne<br></br>
                                Distribution Brand while respecting our brand and legal/<br></br>
                                licensing restrictions. These guidelines have been<br></br>
                                developed to ensure that all VerseOne Distribution users<br></br>
                                receive the same brand identity – no matter which media<br></br> platform they find us.</p>

                            <p className='sec2-line pb-5'>Please be aware that by using these assets, you agree to<br></br>
                                our terms of service and privacy policy.</p>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='ui-btn-grid'>
                                <div className='ui-btn'>
                                    <div>
                                        <Button className="download-btn">Download Guide</Button>
                                    </div>
                                    <div className='mt-5'>
                                        <Button className="download-btn">Download Media Kit</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec-3 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='sec3-batch'>Attribution</p>
                            <p className='sec3-main-heading'>What you need to know</p>
                            <p className='sec3-line'>To comply with our licensing agreements, you must always<br></br>
                                attribute content from VerseOne Distribution with the logo. In<br></br>
                                partner integrations, press releases and media publications, you<br></br>
                                should always use our full logo (icon + wordmark). We do allow<br></br>
                                using only our icon if it’s featured as an app icon on the app<br></br>
                                screen of a device, or other icons.</p>
                            <p className='sec3-line'>
                                The logo is the combination of a wordmark with our icon.</p>
                            <p className='sec3-line'>
                                Our icon is a shorter version of our logo. Only use it if you do not<br></br>
                                have enough room for the full logo.</p>
                            <p className='sec3-line'>
                                When you place our logo in a design, please make sure you give it<br></br>
                                room to breathe; we call this “clear space.” Always leave a clear<br></br>
                                space area equal to the cap height of the Pearson logotype<br></br>
                                “LOGO.”Logo artwork comes with the clear space dimensions<br></br>
                                included in the art board size.</p>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12' id="sec3-grid">
                            <div className='sec3-grid'>
                                <img src={sec3} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec4'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='sec4-img-div'>
                                <img style={{width:"100%"}} src={sec4} alt="" />
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='sec4-batch'>VerseOne Distribution brand color palette </p>
                            <p className='SEC4-MAIN-HEADING'>Colorful things to note</p>
                            <p className='sec4-heading'>
                                While embracing a much more artsy and vibrant color scheme, we<br></br>
                                are careful to use colors that appeal to a youthful and playful<br></br>
                                mind.</p>
                            <p className='sec4-heading'> Following are the color usage on fonts. i.e. Headers Sub-header <br></br>
                                and body text.</p>
                            <p className='sec4-heading'>
                                Headers, Sub-Headers & Body Text</p>

                            <p className='sec4-heading'>The black color should be used on light colored backgrounds. The<br></br>
                                white color should be used on dark colored backgrounds.</p>
                            <p className='sec4-heading'>
                                Secondary Color Usage</p>
                            <p className='sec4-heading'>
                                Secondary colors must be used where primary colors are not representing best. No other secondary colors used anywhere to represent the brand.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec5 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='sec5-batch'>Font and Typography</p>
                            <p className='sec5-main-heading'>Our type of text</p>
                            <p className='sec3-line'>
                                Typography is the art and technique of arranging type to make<br></br>
                                written language legible, readable and appealing when displayed.<br></br>
                                The term typography is also applied to the style, arrangement, and<br></br>
                                appearance of the letters, numbers, and symbols created by the<br></br>
                                process.</p>
                            <p className='sec3-line'>
                                If you can’t our recommended font for your work, try commonly<br></br>
                                available default fonts in this order:</p>



                            <ul>
                                <li className='sec3-line'> Default sans-serif for the platform</li>
                                <li className='sec3-line'>Helvetica Neue</li>
                                <li className='sec3-line'>Helvetica Neue</li>
                                <li className='sec3-line'>Arial</li>
                            </ul>


                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12' id="sec3-grid">
                            <div className='sec3-grid'>
                                <img src={sec5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec6'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className='sec4-img-div'>
                                <img style={{width:"100%"}} src={sec6} alt="" />
                            </div>

                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='sec6-batch'>Brand Icons </p>
                            <p className='SEC4-MAIN-HEADING'>About our Icons</p>
                            <p className='sec4-heading'>
                                <p className="sec6-main">FAVICON</p>
                                <p ></p> A favicon is a small, 16×16 pixel icon used on web browsers to represent a website or a web page.
                                Short for ‘favorite icon’, favicons are most commonly displayed on tabs at the top of a web browser, but they are also found on your browser’s bookmark bar, history, and more.

                                <p className="sec6-main"> APPICON</p>
                                An app icon is a visual anchor for your product. You can think of it as a tiny piece of branding that not only needs to look attractive and stand out, but ideally also communicate the core essence of your application. Icon design and logo design are not the same thing. This is the version of our identity that will be used on mobile apps and software applications.


                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sec7 '>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <p className='sec7-batch'>Logo Exceptions</p>
                            <p className='sec5-main-heading'>Logo Exceptions</p>
                            <p className='sec3-line'>
                                It’s important that the appearance of the logo remains consistent. The <br></br>
                                logo should not be misinterpreted, modified, or added to. Its orientation,<br></br>
                                color, and composition should remain as indicated in this document —<br></br>
                                there are no exceptions.</p>

                            <p className='sec6-main'>DO’S</p>
                            <p className='sec3-line'>
                                1. SPACE AROUND THE LOGO; Logo should always be given some breathing<br></br>
                                room. Preferably placement is on white or neutral backgrounds.</p>
                            <p className='sec3-line'>
                                2. PLACEMENT ON DARK BACKGROUNDS; If the logo needs to be placed on<br></br> a dark background, use the negative logo.</p>
                            <p className='sec6-main'>DONT’S</p>
                            <p className='sec3-line'>
                                1. DO NOT sit the logo on high contrast or vibrant colors. Do not place the<br></br> logo on colors and tones similar to the logos colors </p>
                            <p className='sec3-line'>2. DO NOT tilt, rotate, stretch, skew or distort the logo in anyway.</p>
                            <p className='sec3-line'>
                                3. DO NOT add unnecessary embellishments like drop shadows, gradients, embossing etc. to the logo
                            </p>


                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12' id="sec3-grid">
                            <div className='sec3-grid'>
                                <img src={sec7} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>




    </>

    )
}

export default Uiguide

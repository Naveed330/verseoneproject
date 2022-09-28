import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import "./News.css";
import news from "../assets/news-pic.png";
import news2 from "../assets/news2.png";
import { data } from "./Newsarray";
import Card from 'react-bootstrap/Card';
import { BsArrowRight } from "react-icons/bs"

function News() {
    return (<>
        <section>
            <Breadcrumb className='bread-crumbs'>
                <Breadcrumb.Item active className='BREAD-ITEM' href="#" style={{ color: " #EE0979" }}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active className='BREAD-ITEM' href="">
                    News
                </Breadcrumb.Item>
                <Breadcrumb.Item active className='BREAD-ITEM' href="">
                    New musical festival
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className='container'>
                <h1 className='main-news-heading mt-5'>New musical!</h1>
                <div className='musical-news'>
                    <h1 className='main-news-heading'> festival start now!!</h1>
                    <p className='date'>19/08/2022</p>
                </div>
                <div className='news-img-div'>
                    <img src={news} alt="" />
                </div>
                <p className='news-content'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique aliquam felis lobortis arcu ante. Cras facilisi praesent eget eros, gravida diam duis. Donec diam lectus in risus ipsum proin amet. Tempus porttitor aliquet nisl, maecenas risus purus molestie nibh dolor. Ut diam curabitur euismod eget. Ornare vulputate vel auctor vivamus id vitae lorem. Erat risus purus quis sit fermentum, posuere praesent. Non facilisis rhoncus, accumsan augue vitae sem. Id malesuada vehicula sapien erat.</p>
                <p className='news-content'>
                    Tortor, habitant lobortis rutrum metus ultrices. Sit molestie vel imperdiet fermentum, magna pharetra sagittis. Arcu a aliquet justo parturient sit amet ut. Eget dui morbi pulvinar praesent molestie. Quis turpis mauris diam posuere mattis feugiat fermentum tincidunt. Amet scelerisque tristique odio ullamcorper.</p>
                <p className='news-content'>
                    Dolor enim, dictum blandit massa eu enim pharetra, odio amet. Morbi interdum velit placerat arcu vestibulum, nunc, enim magna eu. Augue nisi, lacinia gravida proin aliquam. Amet eu velit risus placerat non. Orci purus in mattis libero aenean facilisis facilisis magna. Nisl risus non leo enim. Sed egestas pretium integer sit dignissim. Sapien enim habitant leo sollicitudin urna.<br></br>
                    Amet, id in varius integer varius in. Egestas iaculis turpis amet aliquet eget. A diam tincidunt viverra accumsan. Nec scelerisque tellus diam tincidunt pellentesque donec porta sagittis. Magna ultrices amet, imperdiet risus, tincidunt tellus. Nibh egestas eget ipsum egestas gravida id. Sit scelerisque elit sed auctor quam. Velit orci donec lectus elementum sagittis posuere sed. Phasellus sollicitudin facilisis sit nunc neque nunc, purus. Urna sit elit, elementum pellentesque ut egestas elementum iaculis. Semper in mauris, sed ullamcorper magna. Aliquet suspendisse ultrices molestie sem sed. Gravida dignissim at dignissim in est et. Vulputate eget vestibulum rhoncus sagittis at. Facilisi tortor scelerisque aliquam at morbi viverra id.
                </p>


                <div className='news2sec'>
                    <img src={news2} alt="" />
                </div>
                <p className='news-content mt-5'>
                    Habitant morbi lorem non nisl lectus quam massa ut turpis. Porta non nisi, et laoreet pellentesque tortor. Interdum congue ac non libero consectetur viverra. Eu, odio porttitor mollis aliquet at. Hendrerit senectus vitae, dictum aliquet convallis gravida. Eget sit faucibus a amet sed et. Posuere odio convallis non in facilisis. Risus, montes, faucibus nunc enim risus elit elementum aliquet arcu. Eu justo metus, consectetur odio ultrices vel tristique viverra auctor. Arcu nibh viverra amet, lorem. Aliquam, tellus vestibulum faucibus duis est nisl scelerisque nec. Eget egestas urna, amet vel nisi, arcu, augue tortor turpis. Nisi et vel sodales tincidunt lectus sem.<br></br>
                    Fermentum tempus, blandit aliquet sed. Eget urna nunc purus massa massa in. Eu auctor porta vel tempor, porta imperdiet amet. Tellus pharetra eu diam amet quis praesent. Sed magna vitae sapien risus rhoncus viverra. Diam, mattis tortor aliquam ut ultrices nibh pulvinar varius sodales.<br></br>
                    Sit eu elementum consequat, tristique integer dolor ultrices lacus. Eu, tellus, sit posuere diam diam pulvinar ultrices. Rhoncus turpis scelerisque sit adipiscing. Nulla arcu dignissim aliquam turpis senectus malesuada purus in aliquet. Viverra in sed orci suspendisse diam urna. Sit nulla pharetra mi lectus nisl aliquet pretium id tempus. Urna vel gravida donec feugiat eget sed vestibulum libero nunc.<br></br>
                    Ac semper aenean sodales urna scelerisque orci. Euismod in et ullamcorper sagittis.
                </p>
                <p className='news-sec3'>Continue reading</p>
                <div className='card-main'>

                    {
                        data.map((value, index) => {
                            return (<>
                                <Card className="array-card" key={index} style={{ width: '35rem',borderRadius:"15px" }}>
                                    <Card.Img variant="top" src={value.imgae} />
                                    <Card.Body>
                                        <Card.Title className='card-text'>{value.text}</Card.Title>
                                        <Card.Text className="card-paragraph">{value.paragraph}
                                        </Card.Text>
                                        <div className='card-div'>
                                            <div className='d-flex gap-3 flex-wrap'>  <p className='card-data'>{value.date}</p>
                                                <p className='card-data'>{value.name}</p></div>
                                            <div>
                                                <p className='card-data'>{value.btn}<BsArrowRight className='card-data' /></p>
                                            </div>


                                        </div>
                                    </Card.Body>
                                </Card>




                            </>)

                        })
                    }








                </div>















            </div>




        </section>






    </>

    )
}

export default News

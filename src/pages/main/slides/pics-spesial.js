import React from "react";
import Stars from "./stars";
import Image from "../../../components/image/image";
import { ReactComponent as Pic } from '../../../components/image/pics/picItem.svg'
import { ReactComponent as Pic2 } from '../../../components/image/pics/picItem2.svg'
import { ReactComponent as Pic3 } from '../../../components/image/pics/picItem3.svg'

function PicsSpecial() {
    return (
        <>

            <div className="bg-light mx-1 my-2 flex-column d-flex justify-content-center align-items-between rounded">
                <div className="imagePart d-flex flex-column justify-content-center align-items-center">
                    <Pic style={{ width: '17vw', height: '26vh' }} />
                    <Stars size='2vw' fillColor='#009BE1' />
                </div>
                <div className="d-flex flex-column justiy-content-center bg-secondary rebate3">
                    <small className="text-main">31% OFF</small>
                </div>
                <div className="d-flex flex-column justiy-content-center bg-primary deadline1">
                    <small className="text-main">فقط تا خرداد</small>
                </div>
                <div style={{ backgroundColor: '#F1F9FD', width: '18vw', height: '14vh' }} dir="rtl" className="d-flex flex-column justify-content-center align-items-center">
                    <h5>نایلون طرح لبخند</h5>
                    <small style={{ textAlign: 'center', fontSize: '12px' }} className='text-dark'>موجود در انبار پلاست اپ </small>
                    <small style={{ textAlign: 'center', fontSize: '12px' }} className='text-dark'>
                        <span className="text-secondary">10000</span> تومان -  &nbsp;
                        <span className="text-secondary">210000</span> تومان
                    </small>
                </div>
            </div>

            <div className="bg-light mx-1 my-2 flex-column d-flex justify-content-center align-items-between rounded">
                <div className="imagePart d-flex flex-column justify-content-center align-items-center">
                    <Pic2 style={{ width: '17vw', height: '26vh' }} />
                    <Stars size='2vw' fillColor='#009BE1' />
                </div>
                <div className="d-flex flex-column justiy-content-center bg-secondary rebate3">
                    <small className="text-main">31% OFF</small>
                </div>
                <div className="d-flex flex-column justiy-content-center bg-primary deadline1">
                    <small className="text-main">فقط تا خرداد</small>
                </div>
                <div style={{ backgroundColor: '#F1F9FD', width: '18vw', height: '14vh' }} dir="rtl" className="d-flex flex-column justify-content-center align-items-center">
                    <h5>نایلون طرح لبخند</h5>
                    <small style={{ textAlign: 'center', fontSize: '12px' }} className='text-dark'>موجود در انبار پلاست اپ </small>
                    <small style={{ textAlign: 'center', fontSize: '12px' }} className='text-dark'>
                        <span className="text-secondary">10000</span> تومان -  &nbsp;
                        <span className="text-secondary">210000</span> تومان
                    </small>
                </div>
            </div>
            <div className="bg-light mx-2 my-2 flex-column d-flex justify-content-center align-items-center rounded py-2">
                <div className="imagePart d-flex flex-column justify-content-center align-items-center">
                    <Pic3 style={{ width: '17vw', height: '41vh' }} />

                </div>

            </div>


        </>
    )
}

export default PicsSpecial;
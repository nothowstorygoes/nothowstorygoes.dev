'use client'
import Slideshow from "../components/slideshow";
import Sidebar from '../components/menuburger';
import styles from '../css/page.module.css';

const Prj = () => 
{
    return (
    <div id="outer-container">
        <Sidebar />
        <main id="page-wrap">
            <Slideshow/>
        </main>
    </div>
    )
};

export default Prj;
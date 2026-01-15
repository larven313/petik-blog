import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
    const about = {
        padding: "20px",
        height: "51vh",
    }
    return (
        <div>
            <Navbar/>
            <div style={about}>
                <h1>About PeTIK</h1>
                <p>
                    Pesantren PeTIK adalah lembaga pendidikan yang mengintegrasikan ilmu agama dan teknologi informasi. 
                    Dengan kurikulum berbasis IT, santri tidak hanya dibekali dengan ilmu keislaman tetapi juga keterampilan dalam pemrograman, 
                    pengelolaan basis data, serta pengembangan aplikasi berbasis web dan mobile.
                </p>
                <p>
                    Selain itu, PeTIK juga menyediakan berbagai program pelatihan dan proyek berbasis industri untuk meningkatkan pengalaman praktis santri. 
                    Dengan bimbingan para mentor yang berpengalaman, santri PeTIK siap bersaing di dunia kerja maupun membangun startup berbasis teknologi.
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default About;

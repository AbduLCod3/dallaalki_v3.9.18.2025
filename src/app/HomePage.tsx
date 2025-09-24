import Image from "next/image";
import "./styles/homePage.scss";
import SearchBar from "../components/searchBar/SearchBar";
import mogaImage from "../../public/images/result_0.jpeg";
export default function HomePage() {
  let listings = 2000;
  return (
    <div className="content">
      <div className="homePage">
        <div className="textContainer">
          <div className="wrapper">
            <h1 className="title">
              <h1>Welcome to Dallaalkii — Listings coming soon.</h1>
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consectetur, dolore commodi. Accusantium sint adipisci animi ad
              voluptatum saepe numquam sit beatae quis necessitatibus in
              provident expedita, autem eligendi officia culpa!
            </p>
            <SearchBar />
            <div className="boxes">
              <div className="box">
                <h1>25+</h1>
                <h2>Expert Agents</h2>
              </div>
              <div className="box">
                <h1>200</h1>
                <h2>Satisfied Customers</h2>
              </div>
              <div className="box">
                <h1>{listings}+</h1>
                <h2>Listings</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="imageContainer">
          <Image src={mogaImage} alt="" />
        </div>
      </div>
    </div>
  );
}

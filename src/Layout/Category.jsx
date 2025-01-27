import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import CategorySection from "./CategorySection";
const Category = () => {
  const [artData, setArtData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("https://b9a9-art-craft-store-server.vercel.app/art")
      .then((res) => res.json())
      .then((data) => setArtData(data));
  }, []);

  // Filter data based on category
  const filteredData =
    selectedCategory === "All"
      ? artData
      : artData.filter((item) => item.subcategoryName === selectedCategory);
  return (
    <div>
      <div className="text-center text-4xl">
        <h1
          style={{
            paddingBottom: "2rem",
            margin: "auto 0",
            fontWeight: "normal",
          }}
        >
          We Have Variety of{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>
            <Typewriter
              words={[
                "Landscape Painting",
                "Portrait Drawing",
                "Watercolour Painting",
                "Oil Painting",
              ]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
      </div>
      <div className="mt-6 ">
        <Tabs>
          <TabList>
            <Tab onClick={() => setSelectedCategory("All")}>All</Tab>
            <Tab onClick={() => setSelectedCategory("Landscape Painting")}>
              Landscape Painting
            </Tab>
            <Tab onClick={() => setSelectedCategory("Portrait Drawing")}>
              Portrait Drawing
            </Tab>
            <Tab onClick={() => setSelectedCategory("Watercolour Painting")}>
              Watercolour Painting
            </Tab>
            <Tab onClick={() => setSelectedCategory("Oil Painting")}>
              Oil Painting
            </Tab>
            <Tab onClick={() => setSelectedCategory("Charcoal Sketching")}>
              Charcoal Sketching
            </Tab>
          </TabList>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {" "}
              {filteredData.map((data) => (
                <CategorySection key={data.id} data={data}></CategorySection>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <CategorySection key={data.id} data={data}></CategorySection>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <CategorySection key={data.id} data={data}></CategorySection>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <CategorySection key={data.id} data={data}></CategorySection>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <CategorySection key={data.id} data={data}></CategorySection>
              ))}
            </ul>
          </TabPanel>
          <TabPanel>
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredData.map((data) => (
                <CategorySection key={data.id} data={data}></CategorySection>
              ))}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Category;

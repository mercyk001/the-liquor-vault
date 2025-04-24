import React, { useEffect, useState } from "react";
import LiquorCard from "../components/LiquorCard";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LiquorList({ cart, setCart }) {
  const [liquors, setLiquors] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/liquors")
      .then((res) => res.json())
      .then((data) => setLiquors(data))
      .catch((error) => {
        console.error("Failed to fetch liquors:", error);
        setLiquors([]); // prevent undefined
      });
  }, []);

  const handleAddToCart = (liquor) => {
    if (Array.isArray(cart)) {
      setCart([...cart, liquor]);
    } else {
      console.error("cart is not an array:", cart);
    }
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentLiquors = liquors?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil((liquors?.length || 0) / itemsPerPage);

  return (
    <div className="liquor-list position-relative">
      <div className="container my-4 ">

        <h2 className="text-center text-warning mb-4" style={{ fontFamily: " 'Times new Roman "}}>Find Your Perfect Drink- Scroll Through The Vault!</h2>



        <div className="row">
          {currentLiquors.map((liquor) => (
            <div className="col-md-4 mb-4" key={liquor.id}>
              <LiquorCard liquor={liquor} handleAddToCart={handleAddToCart} />
            </div>
          ))}
        </div>

        {/* Pagination buttons */}
        <div className="d-flex justify-content-center my-4">
          <nav>
            <ul className="pagination">
              {[...Array(totalPages)].map((_, index) => (
                <li
                  key={index}
                  className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                >
                  <button
                    className="page-link btn-warning"
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <button
        className="btn btn-warning rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
          width: "60px",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        onClick={() => navigate("/cart")}
      >
        <FaShoppingCart size={24} color="white" />
      </button>
    </div>
  );
}

export default LiquorList;

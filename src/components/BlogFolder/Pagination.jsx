import React, { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

const Pagination = () => {
  const { page, totalPages, handlerPageChange } = useContext(AppContext);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        backgroundColor: "black",
        paddingTop: "2px",
        paddingBottom: "2px",
        borderTop: "2px solid #e2e8f0",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          width: "100%",
          padding: "0 20px", // Add some padding on the sides
          justifyContent: "space-between", // Space the items evenly
        }}
      >
        {page > 1 && (
          <button
            style={{
              borderRadius: "8px",
              border: "2px solid #e2e8f0",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => handlerPageChange(page - 1)}
          >
            Previous
          </button>
        )}

        <p
          style={{
            fontSize: "14px",
            fontWeight: "600",
            color: "white",
            margin: "0", // Remove the default margin
          }}
        >
          Page {page} of {totalPages}
        </p>

        {page < totalPages && (
          <button
            style={{
              borderRadius: "8px",
              border: "2px solid #e2e8f0",
              paddingLeft: "30px",
              paddingRight: "30px",
              paddingTop: "10px",
              paddingBottom: "10px",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => handlerPageChange(page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
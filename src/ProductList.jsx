// src/components/ProductList.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/CartSlice';  // Assurez-vous d'importer la fonction d'action 'addItem'

const ProductList = () => {
  // Tableau des plantes à afficher
  const plantsArray = [
    {
      id: 1,
      name: "Rose",
      image: "https://example.com/rose.jpg", // Remplacez avec l'URL de l'image de la plante
      description: "A beautiful flowering plant.",
      cost: 20.00,
      categories: ["Flowering", "Outdoor"]
    },
    {
      id: 2,
      name: "Cactus",
      image: "https://example.com/cactus.jpg", // Remplacez avec l'URL de l'image de la plante
      description: "A low-maintenance plant.",
      cost: 15.00,
      categories: ["Succulent", "Indoor"]
    },
    {
      id: 3,
      name: "Bamboo",
      image: "https://example.com/bamboo.jpg", // Remplacez avec l'URL de l'image de la plante
      description: "A fast-growing plant for home or garden.",
      cost: 25.00,
      categories: ["Indoor", "Outdoor"]
    }
  ];

  // Etat local pour suivre les produits ajoutés au panier
  const [addedToCart, setAddedToCart] = useState({});

  // Hook Redux pour dispatcher l'ajout de l'élément au panier
  const dispatch = useDispatch();

  // Fonction pour ajouter une plante au panier
  const handleAddToCart = (plant) => {
    // Ajouter la plante au panier avec Redux
    dispatch(addItem(plant));

    // Mise à jour de l'état ajouté au panier (ajout de la plante par son nom)
    setAddedToCart((prev) => ({ ...prev, [plant.name]: true }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((plant) => (
        <div key={plant.id} className="product-card">
          <img src={plant.image} alt={plant.name} className="product-image" />
          <h3>{plant.name}</h3>
          <p>{plant.description}</p>
          <p><strong>${plant.cost}</strong></p>
          <button 
            onClick={() => handleAddToCart(plant)}
            disabled={addedToCart[plant.name]}
            className="add-to-cart-btn"
          >
            {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

// Importer Express et créer un routeur
const express = require("express");
const router = express.Router();

// Importer toutes les fonctions du contrôleur
const {
  getAllEtudiants,
  getEtudiantById,
  createEtudiant,
  updateEtudiant,
  deleteEtudiant,
  getEtudiantsByFiliere,
  searchEtudiants,
  getEtudiantsDesactives
} = require("../controllers/etudiantController");

// ============================================
// DÉFINITION DES ROUTES
// ============================================

// Route: /api/etudiants
router.route("/").get(getAllEtudiants).post(createEtudiant);

// ⚠️ Routes spécifiques AVANT :id
router.get("/search", searchEtudiants);
router.get("/filiere/:filiere", getEtudiantsByFiliere);
router.get("/desactives", getEtudiantsDesactives);

// Route générique avec ID (TOUJOURS À LA FIN)
router
  .route("/:id")
  .get(getEtudiantById)
  .put(updateEtudiant)
  .delete(deleteEtudiant);

// Exporter le routeur
module.exports = router;

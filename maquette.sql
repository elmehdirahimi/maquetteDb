-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le : lun. 19 oct. 2020 à 10:13
-- Version du serveur :  10.3.23-MariaDB-1
-- Version de PHP : 7.3.15-3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `maquette`
--

-- --------------------------------------------------------

--
-- Structure de la table `details_etage`
--

CREATE TABLE `details_etage` (
  `reference` int(11) NOT NULL,
  `etage_id` int(11) NOT NULL,
  `prix` varchar(50) NOT NULL,
  `lot` varchar(50) NOT NULL,
  `typologie` varchar(50) NOT NULL,
  `surface` double NOT NULL,
  `complement` varchar(50) NOT NULL,
  `exposition` varchar(50) NOT NULL,
  `image_path` varchar(100) NOT NULL,
  `pdf_path` varchar(100) NOT NULL,
  `etat` varchar(50) NOT NULL,
  `image_reserver_path` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `details_etage`
--

INSERT INTO `details_etage` (`reference`, `etage_id`, `prix`, `lot`, `typologie`, `surface`, `complement`, `exposition`, `image_path`, `pdf_path`, `etat`, `image_reserver_path`) VALUES
(1, 1, 'N.C', 'T4', 'T2', 62, 'terrasse', 'Sud', 'img/apprt1.jpg', 'pdf/apprt1.pdf', 'disponible', ''),
(2, 1, 'N.C', 'T5', 'T4', 62, 'terrasse', 'Nord', 'img/apprt2.jpg', 'pdf/apprt2.pdf', 'reserved', 'img/img_reserved/apprt2.jpg'),
(3, 1, 'N.C', 'T2', 'T3', 200, 'terrasse', 'Sud', 'img/apprt2.jpg', 'pdf/apprt2.pdf', '', 'img/img_reserved/apprt2.jpg'),
(4, 1, 'N.C', 'T2', 'T3', 200, 'terrasse', 'Sud', 'img/apprt2.jpg', 'pdf/apprt2.pdf', '', 'img/img_reserved/apprt2.jpg'),
(5, 2, 'N.C', 'T4', 'T2', 62, 'terrasse', 'Sud', 'img/apprt1.jpg', 'pdf/apprt1.pdf', 'disponible', ''),
(6, 2, 'N.C', 'T5', 'T4', 62, 'terrasse', 'Nord', 'img/apprt2.jpg', 'pdf/apprt2.pdf', 'reserved', 'img/img_reserved/apprt2.jpg'),
(7, 2, 'N.C', 'T2', 'T3', 200, 'terrasse', 'Sud', 'img/apprt2.jpg', 'pdf/apprt2.pdf', '', 'img/img_reserved/apprt2.jpg'),
(8, 2, 'N.C', 'T2', 'T3', 200, 'terrasse', 'Sud', 'img/apprt2.jpg', 'pdf/apprt2.pdf', '', 'img/img_reserved/apprt2.jpg'),
(9, 3, 'N.C', 'T4', 'T2', 62, 'terrasse', 'Sud', 'img/apprt1.jpg', 'pdf/apprt1.pdf', 'disponible', ''),
(10, 3, 'N.C', 'T5', 'T4', 62, 'terrasse', 'Nord', 'img/apprt2.jpg', 'pdf/apprt2.pdf', 'reserved', 'img/img_reserved/apprt2.jpg'),
(11, 3, 'N.C', 'T2', 'T3', 200, 'terrasse', 'Sud', 'img/apprt2.jpg', 'pdf/apprt2.pdf', '', 'img/img_reserved/apprt2.jpg'),
(12, 3, 'N.C', 'T2', 'T3', 200, 'terrasse', 'Sud', 'img/apprt2.jpg', 'pdf/apprt2.pdf', '', 'img/img_reserved/apprt2.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `etages`
--

CREATE TABLE `etages` (
  `etage_id` int(11) NOT NULL,
  `nom_etage` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `etages`
--

INSERT INTO `etages` (`etage_id`, `nom_etage`) VALUES
(1, 'R + 2'),
(2, 'R + 1'),
(3, 'RDC');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `details_etage`
--
ALTER TABLE `details_etage`
  ADD PRIMARY KEY (`reference`);

--
-- Index pour la table `etages`
--
ALTER TABLE `etages`
  ADD PRIMARY KEY (`etage_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `details_etage`
--
ALTER TABLE `details_etage`
  MODIFY `reference` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT pour la table `etages`
--
ALTER TABLE `etages`
  MODIFY `etage_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

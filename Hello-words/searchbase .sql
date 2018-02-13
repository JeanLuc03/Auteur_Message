-- phpMyAdmin SQL Dump
-- version 2.11.6
-- http://www.phpmyadmin.net
--
-- Serveur: localhost
-- Généré le : Mar 12 Avril 2016 à 13:48
-- Version du serveur: 5.0.51
-- Version de PHP: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `searchbase`
--

-- --------------------------------------------------------

--
-- Structure de la table `donnees`
--

CREATE TABLE `donnees` (
  `id` smallint(5) unsigned NOT NULL auto_increment,
  `auteur` varchar(30) collate utf8_bin NOT NULL,
  `message` varchar(200) collate utf8_bin NOT NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=73 ;

--
-- Contenu de la table `donnees`
--

INSERT INTO `donnees` (`id`, `auteur`, `message`) VALUES
(1, 'lario', 'slt'),
(2, 'andreas', 'hi'),
(3, 'Jean-luc', 'efioo t''es a la maison?'),
(4, 'lario', 'Non pourquoi?'),
(5, 'lelenda', 'slt par ici'),
(6, 'pierro', 'slt par la'),
(7, 'Sandra', 'Salut a tous!!!'),
(8, 'Esther', 'xava'),
(9, 'Esthy', 'xava'),
(10, 'Moliere', 'Je suis la'),
(55, 'biliski', 'hooooo'),
(56, 'abel', 'hi'),
(57, 'abel', 'slt'),
(58, 'lelenda', 'salut!!!!'),
(59, 'tibaut', 'salut!!!!'),
(60, 'lario', 'hbd'),
(62, 'Steven', 'Salut comment va tu?\r\n'),
(63, 'promiko', 'Juste un test'),
(64, 'Patmos', 'Iles Patmos'),
(65, 'Abalo', 'Bonjour'),
(66, 'Abalo', 'Bonjour'),
(67, 'Jean', 'Bonsoir'),
(68, 'Jean Luc', 'Coucou'),
(69, 'Promise', 'Slt'),
(70, 'promiko', 'anani'),
(71, 'Joyce', 'Ã§a va?'),
(72, 'crosby', 'Salut');

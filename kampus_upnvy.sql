-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 19, 2024 at 02:29 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kampus_upnvy`
--

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nidn` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `dosen`
--

INSERT INTO `dosen` (`id`, `nama`, `nidn`) VALUES
(1, 'Awang Hendrianto Pratomo', '0025077701'),
(2, 'Andiko Putro Suryotomo', '0030098504'),
(3, 'Dessyanto Boedi Prasetyo', '0505127501'),
(4, 'Rochmat Husaini', '0026048804'),
(5, 'Frans Richard Kodong', '0523026201'),
(6, 'Mangaras Yanu F.', '0521018201'),
(7, 'Dyah Ayu Irawati', '0008078401'),
(8, 'Dr. Heriyanto', '0508067703'),
(9, 'Shoffan Saifullah', '0528019302'),
(10, 'Rifki Indra Perwira', '0508078301'),
(11, 'Oliver Samuel Simanjuntak', '0525058302'),
(12, 'Dr. Herlina Jayadianti', '0527087701'),
(13, 'Nur Heri Cahyana', '0522096001'),
(14, 'Hidayatulah Himawan', '0024127601'),
(15, 'Hafsah', '0529037201'),
(16, 'Ahmad Taufiq Akbar', '0518118701'),
(17, 'Juwairiah', '0527077601'),
(18, 'Heru Cahya Rustamaji', '0514067101'),
(19, 'Agus Sasmito Aribowo', '0012047510'),
(20, 'Wilis Kaswidjanti', '0513047601'),
(21, 'Bambang Yuwono', '0512027401'),
(22, 'Vynska Amalia Permadi', '0025089302'),
(23, 'Budi Santosa', '0510097001'),
(24, 'Herry Sofyan', '0524046402'),
(25, 'Yuli Fauziah', '0508077102'),
(26, 'Novrido Charibaldi', '0503116801'),
(27, 'Simon Pulung Nugroho', '0518028401'),
(28, 'Paryati', '0519047101'),
(29, 'Bagus Muhammad Akbar', '0001088905'),
(30, 'Hari Prapcoyo', '0008128204'),
(31, 'Riza Prapascatama Agusdin', '0006109102');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `id` int(11) NOT NULL,
  `nama` varchar(255) NOT NULL,
  `nim` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`id`, `nama`, `nim`) VALUES
(1, 'MUKHLIZARDY AL FAUZAN', '123180041'),
(2, 'MUHAMMAD MI RAJ RIZKY', '123200080'),
(3, 'BAYU ALVIANSYAH PUTRA', '123210001'),
(4, 'Shofia Atika Nadhira', '123210016'),
(5, 'ARIF AHMAD FADHILAH', '123210032'),
(6, 'SINTA MURWANTI', '123210036'),
(7, 'RIBHAN AULIA ZULMI', '123210038'),
(8, 'PUTRA JADI MUKTI', '123210041'),
(9, 'MAYA WULANDARI', '123210050'),
(10, 'SYLVIA THALIA SALSABILLA', '123210057'),
(11, 'RESTIANA ANGGRAENI', '123210059'),
(12, 'JIHAN PUTRI RATU SASONGKO', '123210133'),
(13, 'SATYA ARYAGUNA', '123210140'),
(14, 'AUDITO ONNY SAPUTRA', '123210141'),
(15, 'AHMAD HANIF HABIB ANNAFI', '123210147'),
(16, 'SHOLAHULHAQ NUR HAMID', '123210151'),
(17, 'GAHARU WINANGGYA BINATHARA', '123210155'),
(18, 'NAYAKA RAFIF SUTAPRAWIRA', '123210158'),
(19, 'ALYA NABILA KURNIAWAN', '123210159'),
(20, 'MUHAMMAD ADITYA NUGRAHA', '123210164'),
(21, 'ROSY MAHARANI', '123210165'),
(22, 'ALVA RAYMON YEHUDHA', '123210166'),
(23, 'CANDY RISTYAN ARDA YUDHA MAHESEGA', '123210172'),
(24, 'KHUSNUL KHOTIMAH', '123210177');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dosen`
--
ALTER TABLE `dosen`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Апр 05 2019 г., 23:20
-- Версия сервера: 5.7.23
-- Версия PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `laravel-react`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE IF NOT EXISTS `categories` (
  `category_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` varchar(200) NOT NULL,
  `category_slug` varchar(200) NOT NULL,
  `show_on_homepage` tinyint(1) NOT NULL DEFAULT '0',
  `category_filter_by` varchar(200) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`category_id`, `category_name`, `category_slug`, `show_on_homepage`, `category_filter_by`) VALUES
(1, 'Скрабы', 'scrub', 1, 'scrub'),
(2, 'Хит продаж', 'bestseller', 1, 'bestseller'),
(3, 'Косметика для лица', 'cosmeticiviso', 1, 'cosmeticiviso'),
(4, 'Косметика для тела', 'setregalo', 0, 'setregalo');

-- --------------------------------------------------------

--
-- Структура таблицы `categories_relationship`
--

CREATE TABLE IF NOT EXISTS `categories_relationship` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `object_id` int(10) UNSIGNED DEFAULT NULL,
  `category_id` int(10) UNSIGNED DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `object_id` (`object_id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `categories_relationship`
--

INSERT INTO `categories_relationship` (`id`, `object_id`, `category_id`) VALUES
(1, 2, 2),
(2, 2, 3),
(3, 3, 2),
(4, 3, 3),
(5, 9, 3),
(6, 4, 1),
(7, 4, 2),
(8, 5, 1),
(9, 5, 2),
(10, 12, 1),
(11, 11, 1),
(12, 13, 1),
(13, 10, 1),
(14, 7, 3),
(15, 1, 3),
(16, 8, 3),
(17, 6, 3);

-- --------------------------------------------------------

--
-- Структура таблицы `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2019_04_02_144946_create_product_attachments_table', 2),
(4, '2019_04_04_044934_add_columns_to_products_table', 3),
(8, '2019_04_05_051213_add_columns_to_products_table', 4),
(10, '2019_04_05_131509_create_products_table', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `pages`
--

CREATE TABLE IF NOT EXISTS `pages` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `slug` varchar(200) NOT NULL,
  `title` text NOT NULL,
  `menu_order` int(11) UNSIGNED NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `pages`
--

INSERT INTO `pages` (`id`, `slug`, `title`, `menu_order`) VALUES
(1, 'about-cosmetics', 'О косметике', 0),
(2, 'shop', 'Ассортимент', 1),
(8, 'videotip', 'Видеосоветы', 2),
(9, 'stock', 'Акции', 3),
(10, 'doyouknow', 'А вы знали ?', 4),
(11, 'contacts', 'Контакты', 5);

-- --------------------------------------------------------

--
-- Структура таблицы `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Структура таблицы `products`
--

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `slug` varchar(200) NOT NULL,
  `title` text NOT NULL,
  `excerpt` text NOT NULL,
  `content` longtext NOT NULL,
  `descrtitle` text NOT NULL,
  `descrtext` text NOT NULL,
  `descr` text NOT NULL,
  `regular_price` decimal(10,0) NOT NULL DEFAULT '0',
  `sale_price` decimal(10,0) NOT NULL DEFAULT '0',
  `discount` decimal(5,2) NOT NULL DEFAULT '0.00',
  `currency` varchar(20) NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_reccomended` tinyint(4) NOT NULL DEFAULT '0',
  `product_description_tab_content` longtext NOT NULL,
  `product_ingredients_tab_content` longtext NOT NULL,
  `product_usage_tab_content` longtext NOT NULL,
  `tab_bg` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `products`
--

INSERT INTO `products` (`id`, `slug`, `title`, `excerpt`, `content`, `descrtitle`, `descrtext`, `descr`, `regular_price`, `sale_price`, `discount`, `currency`, `image`, `is_reccomended`, `product_description_tab_content`, `product_ingredients_tab_content`, `product_usage_tab_content`, `tab_bg`) VALUES
(1, 'крем-для-рук-и-ногтей', 'Крем для рук и ногтей', 'питательный крем 250 мл', '', 'Крем для рук и ногтей', 'Крем для рук и ногтей', 'Крем для рук и ногтей', '115', '0', '0.00', 'грн', '/uploads/2018/10/250ml_1_07-600x587.jpg', 1, '<p style=\"text-align: left;\" align=\"center\">\r\n                                                    <strong>Крем для самой чувствительной кожи</strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\" align=\"center\">\r\n                                                    <strong>Использование защитного детского крема&nbsp;\r\n                                                        <span>Crema</span>\r\n                                                        <span>&nbsp;</span>\r\n                                                        <span>Protettiva</span>\r\n                                                        <span>&nbsp;</span>\r\n                                                        <span>dei</span><span>&nbsp;</span>\r\n                                                        <span>Piccoli</span>\r\n                                                    </strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\" align=\"center\">\r\n                                                    <strong>может стать отличным способом профилактики многих дерматологических симптомов.</strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <em>Детская кожа нуждается в бережном уходе с первых дней жизни.</em>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <em>Правильный выбор косметических средств позволит надёжно защитить ещё неокрепший слой эпидермиса</em>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <em>от негативного влияния бактерий и сохранить ее естественную увлажнённость.</em>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    Главными функциями, которые выполняет крем является увлажнение и защита кожи малыша\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    от воздействия внешних факторов. Крем насыщает эпидермис питательными веществами и влагой,\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    восстанавливая и сохраняя их естественный запас. В его состав входят специальные смягчающие кожу\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    компоненты на основе природных ингредиентов.\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    Благодаря витаминам, минералам и маслам она остаётся гладкой и нежной.\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    <strong>Результаты:</strong>\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    — уменьшилось количество покраснений – 97%\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    — ранки на коже быстрее заживаются – 85%\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    — исчезло раздражение на коже – 88%\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    * По результатам потребительского тестирования, подводимого в течении 6 недель\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">\r\n                                                    с участием 52 женщин, которые использовали Защитный детский крем Alga Ph при уходе за кожей дитей.\r\n                                                </p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>', '<p style=\"text-align: left;\"><strong>Состав крема:</strong></p>\r\n                                                <p style=\"text-align: left;\">— гидролат ромашки</p>\r\n                                                <p style=\"text-align: left;\">— масло абрикосовых косточек</p>\r\n                                                <p style=\"text-align: left;\">— OLIVEM 1000</p>\r\n                                                <p style=\"text-align: left;\">— масло ши</p>\r\n                                                <p style=\"text-align: left;\">— масло виноградных косточек</p>\r\n                                                <p style=\"text-align: left;\">— Д-пантенол</p>\r\n                                                <p style=\"text-align: left;\">— витамин F</p>\r\n                                                <p style=\"text-align: left;\">— экстракт календулы</p>\r\n                                                <p style=\"text-align: left;\">— Euxyl PE 9010</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>\r\n                                                <p style=\"text-align: left;\">&nbsp;</p>', '<p><strong>Способ нанесения:</strong></p>\r\n                                                <p>\r\n                                                    Крем необходимо нанести тонким слоем на внутреннюю поверхность собственных ладоней,\r\n                                                </p>\r\n                                                <p>\r\n                                                    после чего дайте ему нагреться 15-20 секунд. Теперь крем можно наносить на лицо и тело ребенка.\r\n                                                </p>\r\n                                                <p>\r\n                                                    Особое внимание уделите участкам кожи с явными признаками покраснением или шелушением.\r\n                                                </p>\r\n                                                <p>\r\n                                                    При использовании подгузников, крем <strong><span>Crema</span> <span lang=\"EN-US\">Protettiva</span> <span>dei</span> <span>Piccoli</span></strong> рекомендуется применять ежедневно.\r\n                                                </p>', '/uploads/2018/08/Nastojka-pri-miome-matki.jpg'),
(2, 'крем-для-век', 'Крем для век', 'крем для контура глаз 5 мл', '', 'Крем для век', 'Крем для контура глаз Alga Ph снимает отечность и убирает темные круги под глазами. Активные компоненты в его составе обеспечивают необходимую защиту, питание и гидратацию нежной коже вокруг глаз.', 'Крем для контура глаз Alga Ph снимает отечность и убирает темные круги под глазами. Активные компоненты в его составе обеспечивают необходимую защиту, питание и гидратацию нежной коже вокруг глаз.', '350', '0', '0.00', 'грн', '/uploads/2018/08/5-ml_0004-600x587.jpg', 1, '', '', '', '/uploads/2018/08/1_1276029262_C7E5EBE5EDFBE920F7E0E9203035.jpg'),
(3, 'питательный-крем', 'Питательный крем', 'ночной питательный крем 5 мл', '', 'Питательный крем', 'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание. <br /> Помимо увлажнения он насыщает кожу минералами, витаминами, аминокислотами и протеинами.', 'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.  Помимо увлажнения он насыщает кожу минералами, витаминами и аминокислотами.', '735', '0', '0.00', 'грн', '/uploads/2018/08/50-ml_0005-600x587.jpg', 1, '', '', '', ''),
(4, 'скраб-крем-апельсин', 'Скраб-крем апельсин', 'сахарный крем-скраб 180 г', '', 'Скраб-крем апельсин', 'Крем-скраб', 'Крем-скраб', '75', '0', '0.00', 'грн', '/uploads/2018/10/180-g_scrub-cream__01-600x587.jpg', 1, '', '', '', ''),
(5, 'скраб-крем-дыня', 'Скраб-крем дыня', 'сахарный крем-скраб 180 г', '', 'Скраб-крем дыня', 'Крем-скраб', 'Крем-скраб', '75', '0', '0.00', 'грн', '/uploads/2018/10/180-g_scrub-cream__03-600x587.jpg', 1, '', '', '', ''),
(6, 'детский-крем', 'Детский крем', 'гипоалергенный крем 50 мл', '', 'Детский крем', 'Использование защитного гипоалергеного крема Crema Protettiva dei Piccoli может стать отличным способом профилактики многих дерматологических симптомов.', 'Гипоаллергенный крем Alga Ph великолепно подойдет для особо чувствительной нежной кожи. Крем быстро заживляет и увлажняет кожу, а его состав дает возможность использоваться крем с первых месяцев жизни.', '595', '500', '16.00', 'грн', '/uploads/2018/08/50-ml_0006-600x587.jpg', 1, '', '', '', ''),
(7, 'увлажняющий-крем-50мл', 'Увлажняющий крем', 'дневной увлажняющий крем 50 мл', '', 'Увлажняющий крем', 'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.<br/> Его компоненты притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.', 'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.  Его компоненты притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.', '665', '0', '0.00', 'грн', '/uploads/2018/08/50-ml_0007-600x587.jpg', 1, '', '', '', ''),
(8, 'увлажняющий-крем-5мл', 'Увлажняющий крем', 'дневной увлажняющий крем 5 мл', '', 'Увлажняющий крем', 'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.<br/> Крем притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.', 'Дневной увлажняющий крем AlgaPh не просто удерживает влагу, но и заставляет ее работать на кожу.  Крем притягивают влагу извне, замедляют процесс ее испарения и усиливают защитный барьер эпидермиса.', '210', '0', '0.00', 'грн', '/uploads/2018/08/5-ml_0003-600x587.jpg', 1, '', '', '', ''),
(9, 'ночной-питательный-крем', 'Питательный крем', 'ночной питательный крем 5 мл', '', 'Питательный крем', 'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.<br/> Помимо увлажнения он насыщает кожу минералами, витаминами и аминокислотами.', 'Благодаря своим органическим компонентам, ночной питательный крем Alga Ph, обеспечивает коже максимально здоровое природное питание.  Помимо увлажнения он насыщает кожу минералами, витаминами, аминокислотами и протеинами.', '245', '215', '12.00', 'грн', '/uploads/2018/07/5-ml_0002-600x587.jpg', 1, '', '', '', ''),
(10, 'скраб-крем-клубника', 'Скраб-крем клубника', 'сахарный крем-скраб 180 г', '', 'Скраб-крем клубника', 'Крем-скраб', 'Крем-скраб', '75', '0', '0.00', 'грн', '/uploads/2018/10/180-g_scrub-cream__02-600x587.jpg', 0, '', '', '', ''),
(11, 'скраб-крем-ананас', 'Скраб-крем ананас', 'сахарный крем-скраб 180 г', '', 'Скраб-крем ананас', 'Крем-скраб', 'Крем-скраб', '75', '0', '0.00', 'грн', '/uploads/2018/10/180-g_scrub-cream__04-600x587.jpg', 0, '', '', '', ''),
(12, 'скраб-крем-красные-ягоды', 'Скраб-крем красные ягоды', 'сахарный крем-скраб 180 г', '', 'Скраб-крем красные ягоды', 'Крем-скраб', 'Крем-скраб', '75', '0', '0.00', 'грн', '/uploads/2018/10/180-g_scrub-cream__05-600x587.jpg', 0, '', '', '', ''),
(13, 'скраб-крем-фруктовый-микс', 'Скраб-крем фруктовый микс', 'сахарный крем-скраб 180 г', '', 'Скраб-крем фруктовый микс', 'Крем-скраб', 'Крем-скраб', '75', '0', '0.00', 'грн', '/uploads/2018/10/180-g_scrub-cream__05-600x587.jpg', 0, '', '', '', '');

-- --------------------------------------------------------

--
-- Структура таблицы `product_attachments`
--

CREATE TABLE IF NOT EXISTS `product_attachments` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_slug` varchar(191) CHARACTER SET utf8 NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `attachment` varchar(255) CHARACTER SET utf8 NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `product_attachments`
--

INSERT INTO `product_attachments` (`id`, `product_slug`, `product_id`, `attachment`, `type`) VALUES
(1, 'крем-для-рук-и-ногтей', 1, '/uploads/2018/08/5-ml_0001.jpg', 'image'),
(2, 'крем-для-рук-и-ногтей', 1, '/uploads/2018/07/5-ml_0002.jpg', 'image'),
(3, 'крем-для-рук-и-ногтей', 1, '/uploads/2018/08/50-ml_0007.jpg', 'image'),
(4, 'крем-для-рук-и-ногтей', 1, 'https://www.youtube.com/watch?v=Df-Wo48P-M8', 'video'),
(5, 'крем-для-век', 2, '/uploads/2018/08/5-ml_0004.jpg', 'image');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(191) CHARACTER SET utf8 NOT NULL,
  `email` varchar(191) CHARACTER SET utf8 NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) CHARACTER SET utf8 NOT NULL,
  `remember_token` varchar(100) CHARACTER SET utf8 DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Jake Weber', 'randal12@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'jUblahTfQa', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(2, 'Lonie Senger DVM', 'skylar36@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'OlM8Orm1Cg', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(3, 'Ms. Alessandra Prohaska', 'maye54@example.org', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'KbWSBAjTKt', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(4, 'Mr. Leo Legros', 'iconn@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'ztObSRsyXf', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(5, 'Stephan Goodwin Jr.', 'schmitt.lera@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'ShNTGxlME3', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(6, 'Phyllis Pouros', 'lavada25@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'vX6cWACdo7', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(7, 'Rhett Murazik', 'sdickens@example.org', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'u77HXN1BW0', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(8, 'Barton Bartell', 'schmeler.dandre@example.org', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'Wc9jmRkNdU', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(9, 'Arden Erdman', 'erling24@example.net', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', 'WI7qDJOUUw', '2019-02-17 07:11:18', '2019-02-17 07:11:18'),
(10, 'Mr. Morton Stracke Sr.', 'concepcion.cormier@example.com', '2019-02-17 07:11:18', '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm', '5OdlOJnWyx', '2019-02-17 07:11:18', '2019-02-17 07:11:18');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

USE [master]
GO
/****** Object:  Database [DBProyecto2]    Script Date: 06/08/2020 6:54:47 ******/
CREATE DATABASE [DBProyecto2]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'DBProyecto2', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\DBProyecto2.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'DBProyecto2_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS01\MSSQL\DATA\DBProyecto2_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [DBProyecto2] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [DBProyecto2].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [DBProyecto2] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [DBProyecto2] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [DBProyecto2] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [DBProyecto2] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [DBProyecto2] SET ARITHABORT OFF 
GO
ALTER DATABASE [DBProyecto2] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [DBProyecto2] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [DBProyecto2] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [DBProyecto2] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [DBProyecto2] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [DBProyecto2] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [DBProyecto2] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [DBProyecto2] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [DBProyecto2] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [DBProyecto2] SET  DISABLE_BROKER 
GO
ALTER DATABASE [DBProyecto2] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [DBProyecto2] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [DBProyecto2] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [DBProyecto2] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [DBProyecto2] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [DBProyecto2] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [DBProyecto2] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [DBProyecto2] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [DBProyecto2] SET  MULTI_USER 
GO
ALTER DATABASE [DBProyecto2] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [DBProyecto2] SET DB_CHAINING OFF 
GO
ALTER DATABASE [DBProyecto2] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [DBProyecto2] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [DBProyecto2] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [DBProyecto2] SET QUERY_STORE = OFF
GO
USE [DBProyecto2]
GO
/****** Object:  Table [dbo].[Articulo]    Script Date: 06/08/2020 6:54:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articulo](
	[idArticulo] [int] IDENTITY(1,1) NOT NULL,
	[nombre] [varchar](100) NULL,
	[precio] [decimal](18, 2) NULL,
	[categoria] [varchar](25) NULL,
	[detalle] [varchar](max) NULL,
	[estado] [varchar](12) NULL,
	[idUsuario] [int] NULL,
	[imgPortada] [varchar](max) NULL,
	[estadoStock] [nchar](1) NULL,
 CONSTRAINT [PK_Articulo] PRIMARY KEY CLUSTERED 
(
	[idArticulo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Negocio]    Script Date: 06/08/2020 6:54:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Negocio](
	[idNegocio] [int] IDENTITY(1,1) NOT NULL,
	[cantidad] [int] NULL,
	[precio] [decimal](18, 2) NULL,
	[subtotal] [decimal](18, 2) NULL,
	[idAriculo] [int] NULL,
 CONSTRAINT [PK_Negocio] PRIMARY KEY CLUSTERED 
(
	[idNegocio] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Usuario]    Script Date: 06/08/2020 6:54:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Usuario](
	[idUsuario] [int] IDENTITY(1,1) NOT NULL,
	[nombres] [varchar](50) NULL,
	[apellidos] [varchar](50) NULL,
	[direccion] [varchar](100) NULL,
	[telefono] [nchar](16) NULL,
	[email] [varchar](100) NULL,
	[estado] [nchar](1) NULL,
	[contrasena] [varchar](50) NULL,
 CONSTRAINT [PK_Usuario] PRIMARY KEY CLUSTERED 
(
	[idUsuario] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Venta]    Script Date: 06/08/2020 6:54:47 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Venta](
	[idVenta] [int] IDENTITY(1,1) NOT NULL,
	[fechaVenta] [datetime] NULL,
	[idUsuario] [int] NULL,
	[idNegocio] [int] NULL,
	[total] [decimal](18, 2) NULL,
 CONSTRAINT [PK_Venta] PRIMARY KEY CLUSTERED 
(
	[idVenta] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Articulo] ON 

INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (1, N'guante', CAST(10.00 AS Decimal(18, 2)), N'Guantes', N'guante azul ', N'Par', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (2, N'Traje de Bioseguridad', CAST(25.50 AS Decimal(18, 2)), N'Trajes', N'Color: Azul Marino Talla: M, Una sola Piesa', N'Impar', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (4, N'Traje verdes', CAST(55.50 AS Decimal(18, 2)), N'Trajes', N'Talla: M color Verde', N'Impar', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (6, N'Mascarilla de Tela', CAST(1.50 AS Decimal(18, 2)), N'Mascarillas', N'Nuevas mascarillas', N'Impar', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (7, N'Mascarilla 3m', CAST(15.00 AS Decimal(18, 2)), N'Mascarillas', N'Nuevas mascarillas', N'Impar', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (8, N'Filtros de mascarilla', CAST(8.00 AS Decimal(18, 2)), N'Mascarillas', N'Nuevos filtros de mascarilla', N'Par', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (9, N'Guantes Negros', CAST(1.00 AS Decimal(18, 2)), N'Guantes', N'Nuevos guantes', N'Par', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (10, N'Guantes Celestes', CAST(1.00 AS Decimal(18, 2)), N'Guantes ', N'Nuevos guantes', N'Par', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (11, N'Guantes Verdes', CAST(1.00 AS Decimal(18, 2)), N'Guantes', N'Nuevos guantes', N'Par', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (12, N'Traje blanco', CAST(12.00 AS Decimal(18, 2)), N'Trajes', N'Nuevos trajes', N'Impar', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (13, N'Traje Negro', CAST(16.00 AS Decimal(18, 2)), N'Trajes', N'Traje echo con nilon', N'Impar', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (14, N'Traje de bio-seguridad', CAST(20.00 AS Decimal(18, 2)), N'Trajes', N'Traje echo con tela', N'Impar', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (15, N'Gel anti-bacterial', CAST(5.00 AS Decimal(18, 2)), N'Otros', N'Gel completamente sellado', N'Par', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (16, N'Jabon anti-bacterial', CAST(2.00 AS Decimal(18, 2)), N'Otros', N'Nuevo Jabon', N'Par', 2, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (17, N'Alchol anti-bacterial', CAST(3.00 AS Decimal(18, 2)), N'Otros', N'Nuevo alchol', N'Impar', 1, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (18, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (19, N'Mascarilla mas', CAST(15.90 AS Decimal(18, 2)), N'Trajes', N'Nueva mascarilla m83', N'Impar', NULL, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (20, N'Mascarilla de chcolate', CAST(15.60 AS Decimal(18, 2)), N'Mascarillas', N'Nueva mascarilla de chocolate', N'Impar', NULL, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (22, N'Traje nike', CAST(19.68 AS Decimal(18, 2)), N'Trajes', N'Nuevo traje', N'Impar', 12, NULL, NULL)
INSERT [dbo].[Articulo] ([idArticulo], [nombre], [precio], [categoria], [detalle], [estado], [idUsuario], [imgPortada], [estadoStock]) VALUES (24, N'Alchol para manos', CAST(16.30 AS Decimal(18, 2)), N'Otros', N'Nuevo alcohol para manos', N'Conjunto', 13, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Articulo] OFF
GO
SET IDENTITY_INSERT [dbo].[Usuario] ON 

INSERT [dbo].[Usuario] ([idUsuario], [nombres], [apellidos], [direccion], [telefono], [email], [estado], [contrasena]) VALUES (1, N'Dennis', N'Manotoa', N'Ambato', N'0992762555      ', N'dmmanotoa@espe.edu.ec', NULL, N'123456')
INSERT [dbo].[Usuario] ([idUsuario], [nombres], [apellidos], [direccion], [telefono], [email], [estado], [contrasena]) VALUES (2, N'Alan', N'Oña', N'Quito', N'0991245785      ', N'afona2@espe.edu.ec', NULL, NULL)
INSERT [dbo].[Usuario] ([idUsuario], [nombres], [apellidos], [direccion], [telefono], [email], [estado], [contrasena]) VALUES (4, N'Steeven', N'Ona', N'Ambato', N'0966412447      ', N'stevenseven@outlook.com', NULL, NULL)
INSERT [dbo].[Usuario] ([idUsuario], [nombres], [apellidos], [direccion], [telefono], [email], [estado], [contrasena]) VALUES (8, N'Luciano', N'Pereira', N'Ambato', N'099945116       ', N'luciano_pereira@yopmail.com', N'a', N'123456')
INSERT [dbo].[Usuario] ([idUsuario], [nombres], [apellidos], [direccion], [telefono], [email], [estado], [contrasena]) VALUES (12, N'Juan', N'Sarzosa', N'Za', N'0999451241      ', N'juancasarsa@yopmail.com', N'a', N'123456')
INSERT [dbo].[Usuario] ([idUsuario], [nombres], [apellidos], [direccion], [telefono], [email], [estado], [contrasena]) VALUES (13, N'Mia', N'Khalifa', N'EE.UU.', N'0999471664      ', N'mia_khalifa@yopmail.com', N'a', N'123456')
SET IDENTITY_INSERT [dbo].[Usuario] OFF
GO
ALTER TABLE [dbo].[Articulo]  WITH CHECK ADD  CONSTRAINT [FK_Articulo_Usuario] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[Usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[Articulo] CHECK CONSTRAINT [FK_Articulo_Usuario]
GO
ALTER TABLE [dbo].[Negocio]  WITH CHECK ADD  CONSTRAINT [FK_Negocio_Articulo] FOREIGN KEY([idAriculo])
REFERENCES [dbo].[Articulo] ([idArticulo])
GO
ALTER TABLE [dbo].[Negocio] CHECK CONSTRAINT [FK_Negocio_Articulo]
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD  CONSTRAINT [FK_Venta_Negocio] FOREIGN KEY([idNegocio])
REFERENCES [dbo].[Negocio] ([idNegocio])
GO
ALTER TABLE [dbo].[Venta] CHECK CONSTRAINT [FK_Venta_Negocio]
GO
ALTER TABLE [dbo].[Venta]  WITH CHECK ADD  CONSTRAINT [FK_Venta_Usuario] FOREIGN KEY([idUsuario])
REFERENCES [dbo].[Usuario] ([idUsuario])
GO
ALTER TABLE [dbo].[Venta] CHECK CONSTRAINT [FK_Venta_Usuario]
GO
USE [master]
GO
ALTER DATABASE [DBProyecto2] SET  READ_WRITE 
GO

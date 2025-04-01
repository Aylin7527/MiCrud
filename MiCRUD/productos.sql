  CREATE TABLE productos (  
  ID INT(11) NOT NULL AUTO_INCREMENT,  
  Nombre VARCHAR(100) NOT NULL,  
  Descripcion TEXT NOT NULL,  
  Precio DECIMAL(10,2) NOT NULL,  
  CantidadStock INT(11) NOT NULL,  
  Categoria VARCHAR(50) NOT NULL,  
  PRIMARY KEY (ID)  
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;  

INSERT INTO productos (Nombre, Descripcion, Precio, CantidadStock, Categoria) VALUES  
('TCU', 'Transmisión de caja automática', 50.00, 250, 'Repuestos'),  
('Sudadera Juvenil', '90% Poliester-10% Elastano', 15.00, 570, 'Ropa'),  
('Queso Gouda', 'Laminado para sandwich', 60.00, 24, 'Lactosa'),  
('Mouse Lenovo LOQ', 'Conexión inalámbrica', 2000.00, 4, 'Tecnologia'),  
('Intercooler', 'Apto para Nissan y Suzuki', 3000.00, 8, 'Repuestos');  
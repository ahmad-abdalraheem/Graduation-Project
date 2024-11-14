-- Schema Creation
CREATE SCHEMA IF NOT EXISTS devPath;

-- User Table
CREATE TABLE IF NOT EXISTS "User" (
  user_id SERIAL PRIMARY KEY,
  fname VARCHAR(50),
  lname VARCHAR(50),
  email VARCHAR(50) UNIQUE,
  password VARCHAR(300) NOT NULL,
  country INT
);

-- Roadmap Table
CREATE TABLE IF NOT EXISTS "Roadmap" (
  roadmap_id SERIAL PRIMARY KEY,
  title VARCHAR(50) UNIQUE NOT NULL,
  keywords VARCHAR(50) UNIQUE NOT NULL
);

-- Node Type Table
CREATE TABLE IF NOT EXISTS node_type (
  node_type_id SERIAL PRIMARY KEY,
  name VARCHAR(20)
);

-- Topic Table
CREATE TABLE IF NOT EXISTS "Topic" (
  topic_id SERIAL,
  title VARCHAR(20) UNIQUE,
  description VARCHAR(5000),
  node_type INT,
  keywords VARCHAR(50),
  position_x INT,
  position_y INT,
  is_analysis_needed BOOLEAN,
  roadmap_id INT NOT NULL,
  parent_topic_id INT,
  PRIMARY KEY (topic_id, roadmap_id),
  FOREIGN KEY (roadmap_id) REFERENCES "Roadmap" (roadmap_id) ON DELETE CASCADE,
  FOREIGN KEY (node_type) REFERENCES node_type (node_type_id) ON DELETE SET NULL,
  FOREIGN KEY (parent_topic_id) REFERENCES "Topic" (topic_id) ON DELETE SET NULL
);

-- Edge Type Table
CREATE TABLE IF NOT EXISTS edge_type (
  edge_type_id SERIAL PRIMARY KEY,
  name VARCHAR(20)
);

-- Edge Table
CREATE TABLE IF NOT EXISTS "Edge" (
  edge_id SERIAL,
  edge_type INT,
  edge_type_id INT NOT NULL,
  topic_id_1 INT NOT NULL,
  topic_id_2 INT NOT NULL,
  PRIMARY KEY (edge_id),
  FOREIGN KEY (edge_type_id) REFERENCES edge_type (edge_type_id) ON DELETE CASCADE,
  FOREIGN KEY (topic_id_1) REFERENCES "Topic" (topic_id) ON DELETE CASCADE,
  FOREIGN KEY (topic_id_2) REFERENCES "Topic" (topic_id) ON DELETE CASCADE
);

-- Follow Table
CREATE TABLE IF NOT EXISTS "Follow" (
  user_id INT NOT NULL,
  roadmap_id INT NOT NULL,
  PRIMARY KEY (user_id, roadmap_id),
  FOREIGN KEY (user_id) REFERENCES "User" (user_id) ON DELETE CASCADE,
  FOREIGN KEY (roadmap_id) REFERENCES "Roadmap" (roadmap_id) ON DELETE CASCADE
);

-- Achieved Table
CREATE TABLE IF NOT EXISTS "Achieved" (
  user_id INT NOT NULL,
  topic_id INT NOT NULL,
  roadmap_id INT NOT NULL,
  PRIMARY KEY (user_id, topic_id, roadmap_id),
  FOREIGN KEY (user_id) REFERENCES "User" (user_id) ON DELETE CASCADE,
  FOREIGN KEY (topic_id, roadmap_id) REFERENCES "Topic" (topic_id, roadmap_id) ON DELETE CASCADE
);

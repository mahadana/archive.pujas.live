import { DataTypes } from "sequelize";

const defineModels = (sequelize) => {
  const Author = sequelize.define("author", {
    name: {
      type: DataTypes.STRING,
    },
  });

  const Book = sequelize.define("book", {
    title: {
      type: DataTypes.STRING,
    },
  });

  const Chanting = sequelize.define("chantings", {
    data: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fulltext: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    chantType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    audioUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  const LiveStream = sequelize.define("livestreams", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    websiteUrl: {
      type: DataTypes.STRING,
    },
    streamUrl: {
      type: DataTypes.STRING,
    },
  });

  Author.hasMany(Book, { onDelete: "CASCADE" });
  Book.belongsTo(Author);

  return { Author, Book, Chanting, LiveStream };
};

export { defineModels };

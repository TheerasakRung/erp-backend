const { DataTypes } = require('sequelize');
const sequelize = require('../database');


//get data by select 'products' that is table from DB
const Product = sequelize.define('products', {

    // set column from DB
    productID: { 
        type: DataTypes.INTEGER, 
        autoIncrement: true,      
        primaryKey: true
    },
    productTypeID: {
        type: DataTypes.INTEGER, 
    },
    categoryID: {
        type: DataTypes.INTEGER, 
    },
    productname: {
        type: DataTypes.STRING, 
        allowNull: false 
    },
    productdetail: {
        type: DataTypes.STRING, 
    },
    amount: {
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    price: {
        type: DataTypes.INTEGER, 
        allowNull: false 
    },
    productcost: {
        type: DataTypes.INTEGER, 
    },
    productImg: {
        type: DataTypes.STRING(100), 
    }
},{
    timestamps: false
})

const productType = sequelize.define( 'product_types', {
    productTypeID: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,  
        primaryKey: true       
    },
    productTypeName: {
        type: DataTypes.STRING, 
        allowNull: false       
    },
},{
    timestamps: false
});

const productCategory = sequelize.define( 'product_categories', {
    categoryID: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true,
  
    },
    categoryName: {
        type: DataTypes.STRING, 
        allowNull: false,           
    },
},{
    timestamps: false
});

const Transaction = sequelize.define( 'product_transactions', {
    transaction_id: {
        type: DataTypes.INTEGER, 
        autoIncrement: true,
        primaryKey: true       
    },
    productID: {
        type: DataTypes.STRING, 
        allowNull: false       
    },
    transactionType: {
        type: DataTypes.STRING, 
        allowNull: false       
    },
    transactionDetail: {
        type: DataTypes.STRING,       
    },
    quantity_added: {
        type: DataTypes.INTEGER,    
    },
    quantity_removed: {
        type: DataTypes.INTEGER,     
    },
    transaction_date: {
        type: DataTypes.STRING,    
    }
},{
    timestamps: false
});

module.exports = {Product,productType,productCategory,Transaction};
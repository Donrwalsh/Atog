DROP TABLE IF EXISTS blueprints;

CREATE TABLE IF NOT EXISTS blueprints (
            id INT NOT NULL AUTO_INCREMENT, 
            name VARCHAR(25),
            type VARCHAR(25),
            unlockPrerequisite VARCHAR(50),
            researchScrolls INT,
            antiqueTokens INT,
            tier INT,
            unroundedValue INT,
            craftingtimeSeconds INT,
            craftingTimeFormatted VARCHAR(15),
            merchantXP INT,
            workerXP INT,
            fusionXP INT,
            favor INT,
            requiredWorkerOne VARCHAR(20),
            requiredWorkerOneLevel INT,
            requiredWorkerTwo VARCHAR(20),
            requiredWorkerTwoLevel INT,
            requiredWorkerThree VARCHAR(20),
            requiredWorkerThreeLevel INT,
            iron INT,
            wood INT,
            leather INT,
            herbs INT,
            steel INT,
            ironwood INT,
            fabric INT,
            oils INT,
            mana INT,
            gems INT,
            componentOne VARCHAR(25),
            componentOneQuality VARCHAR(25),
            componentOneAmount INT,
            componentTwo VARCHAR(25),
            componentTwoQuality VARCHAR(25),
            componentTwoAmount INT,
            atk INT,
            def INT,
            hp INT,
            eva INT,
            crit INT,
            elementalAffinity VARCHAR(15),
            spiritualAffinity VARCHAR(15),
            craftingUpgradeOne VARCHAR(25),
            craftingUpgradeOneCrafts INT,
            craftingUpgradeTwo VARCHAR(25),
            craftingUpgradeTwoCrafts INT,
            craftingUpgradeThree VARCHAR(25),
            craftingUpgradeThreeCrafts INT,
            craftingUpgradeFour VARCHAR(25),
            craftingUpgradeFourCrafts INT,
            craftingUpgradeFive VARCHAR(25),
            craftingUpgradeFiveCrafts INT,
            ascensionUpgradeOne VARCHAR(25),
            ascensionUpgradeOneShards INT,
            ascensionUpgradeTwo VARCHAR(25),
            ascensionUpgradeTwoShards INT,
            ascensionUpgradeThree VARCHAR(25),
            ascensionUpgradeThreeShards INT,
            discountEnergy INT,
            surchargeEnergy INT, 
            suggestEnergy INT,
            speedUpEnergy INT,
            PRIMARY KEY ( id ) 
            ) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;  

INSERT IGNORE INTO blueprints VALUES (1, "Squire Sword", "Sword", "Blacksmith", null, null, 1, 50, 15, "0:00:15", 135, 2, 10, 1, "Blacksmith", 1, null, null, null, null, 9, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 16, null, null, null, null, null, null, "Blueprint: Shiv", 7, "Blueprint: Arming Sword", 18, "x1.5 Value Increase", 32, "Quality Chance x2", 50, "Quality Chance x3", 80, "-4 Iron Spent", 5, "+30% Multicraft Chance", 5, "Quality Chance x3", 5, 5, 15, 5, 15);
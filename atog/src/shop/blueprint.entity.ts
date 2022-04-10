import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('blueprints')
export class Blueprint {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    type: string;

    @Column()
    unlockPrerequisite: string;

    @Column()
    researchScrolls: number;

    @Column()
    antiqueTokens: number;

    @Column()
    tier: number;

    @Column()
    unroundedValue: number;

    @Column()
    craftingTimeSeconds: number;

    @Column()
    craftingTimeFormatted: string;

    @Column()
    merchantXP: number;

    @Column()
    workerXP: number;

    @Column()
    fusionXP: number;

    @Column()
    favor: number;

    @Column()
    requiredWorkerOne: string;

    @Column()
    requiredWorkerOneLevel: number;

    @Column()
    requiredWorkerTwo: string;

    @Column()
    requiredWorkerTwoLevel: number;

    @Column()
    requiredWorkerThree: string;

    @Column()
    requiredWorkerThreeLevel: number;


    @Column()
    iron: number;

    @Column()
    wood: number;

    @Column()
    leather: number;

    @Column()
    herbs: number;

    @Column()
    steel: number;

    @Column()
    ironwood: number;

    @Column()
    fabric: number;

    @Column()
    oils: number;

    @Column()
    mana: number;

    @Column()
    gems: number;

    @Column()
    componentOne: string;

    @Column()
    componentOneQuality: string;

    @Column()
    componentOneAmount: number;

    @Column()
    componentTwo: string;

    @Column()
    componentTwoQuality: string;

    @Column()
    componentTwoAmount: number;

    @Column()
    atk: number;

    @Column()
    def: number;

    @Column()
    hp: number;

    @Column()
    eva: number;

    @Column()
    crit: number;

    @Column()
    elementalAffinity: string;

    @Column()
    spiritualAffinity: string;

    @Column()
    craftingUpgradeOne: string;

    @Column()
    craftingUpgradeOneCrafts: number;

    @Column()
    craftingUpgradeTwo: string;

    @Column()
    craftingUpgradeTwoCrafts: number;

    @Column()
    craftingUpgradeThree: string;

    @Column()
    craftingUpgradeThreeCrafts: number;

    @Column()
    craftingUpgradeFour: string;

    @Column()
    craftingUpgradeFourCrafts: number;

    @Column()
    craftingUpgradeFive: string;

    @Column()
    craftingUpgradeFiveCrafts: number;

    @Column()
    ascensionUpgradeOne: string;

    @Column()
    ascensionUpgradeOneShards: number;

    @Column()
    ascensionUpgradeTwo: string;

    @Column()
    ascensionUpgradeTwoShards: number;

    @Column()
    ascensionUpgradeThree: string;

    @Column()
    ascensionUpgradeThreeShards: number;

    @Column()
    discountEnergy: number;

    @Column()
    surchargeEnergy: number;

    @Column()
    suggestEnergy: number;

    @Column()
    speedUpEnergy: number;

}
// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT
import {main} from '../models';

export function CompleteCommission(arg1:number):Promise<void>;

export function CreateNewCommission(arg1:string,arg2:string,arg3:Array<main.Reward>):Promise<main.Commission>;

export function DeleteCommission(arg1:number):Promise<void>;

export function DeleteHistories():Promise<void>;

export function LoadCommissionsForDate(arg1:number):Promise<Array<main.Commission>>;

export function MarkTodayAsClaimed():Promise<void>;
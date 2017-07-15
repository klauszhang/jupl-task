import { RuntimeSettings } from "app/models/RuntimeSettings";

export interface Device {
    VigilId: number;
    Uid: string;
    Model: Model;
}

export interface Model {
    RuntimeSettings: RuntimeSettings;
}



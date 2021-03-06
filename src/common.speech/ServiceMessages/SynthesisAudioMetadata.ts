// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license.

export interface ISynthesisMetadata {
    Type: string;
    Data: {
        Offset: number;
        text: {
            Text: string;
            Length: number;
        };
    };
}

// audio.metadata
export interface ISynthesisAudioMetadata {
    Metadata: ISynthesisMetadata[];
}

export class SynthesisAudioMetadata implements ISynthesisAudioMetadata {
    private privSynthesisAudioMetadata: ISynthesisAudioMetadata;

    private constructor(json: string) {
        this.privSynthesisAudioMetadata = JSON.parse(json);
    }

    public static fromJSON(json: string): SynthesisAudioMetadata {
        return new SynthesisAudioMetadata(json);
    }

    public get Metadata(): ISynthesisMetadata[] {
        return this.privSynthesisAudioMetadata.Metadata;
    }
}

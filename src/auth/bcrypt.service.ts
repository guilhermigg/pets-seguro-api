import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class BCryptService {
    async encryptPassword(password : string) : Promise<string> {
        const salt = await bcrypt.genSaltSync(10);
        const hash = await bcrypt.hashSync(password, salt);
        return hash;
    }

    async comparePassword(password : string, hash : string) : Promise<Boolean> {
        const match = await bcrypt.compareSync(password, hash);
        return match;
    }
}

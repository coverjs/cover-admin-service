import { Body, Controller } from '@nestjs/common';
import { ApiTags, Method, UniDefine } from 'uni-nest';
import { AuthService } from './auth.service';
import { AuthDto, AuthVo } from './dto/auth.dto';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UniDefine({
    method: Method.Post,
    summary: '授权接口',
    description: '登录授权获取token',
    isPublic: true,
    response: {
      model: AuthVo
    },
    body: {
      type: AuthDto
    }
  })
  login(@Body() account: AuthDto) {
    return this.authService.userLogin(account);
  }

  @UniDefine({
    method: Method.Get,
    path: 'current',
    summary: '获取当前用户信息',
    description: '',
    isPublic: true
    // response: {
    //   model: AuthVo
    // }
  })
  current() {
    return {
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        {
          key: '0',
          label: '很有想法的'
        },
        {
          key: '1',
          label: '专注设计'
        },
        {
          key: '2',
          label: '辣~'
        },
        {
          key: '3',
          label: '大长腿'
        },
        {
          key: '4',
          label: '川妹子'
        },
        {
          key: '5',
          label: '海纳百川'
        }
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      access: 'admin',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000'
        },
        city: {
          label: '杭州市',
          key: '330100'
        }
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888'
    };
  }
}

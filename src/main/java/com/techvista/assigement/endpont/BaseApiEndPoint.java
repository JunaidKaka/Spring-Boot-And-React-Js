package com.techvista.assigement.endpont;

import com.techvista.assigement.utils.AppUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

@CrossOrigin(origins = AppUtils.ALLOWED_CROSS_ORIGINS)
@RequestMapping(AppUtils.BASE_API_PATH)
public interface BaseApiEndPoint {
}

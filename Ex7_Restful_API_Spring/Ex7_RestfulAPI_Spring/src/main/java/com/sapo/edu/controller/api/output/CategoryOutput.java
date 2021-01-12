package com.sapo.edu.controller.api.output;

import com.sapo.edu.dto.CategoryDTO;
import lombok.Data;

@Data
public class CategoryOutput extends BaseOutput<CategoryDTO> {

    private String name;

}
